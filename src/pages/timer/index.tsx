import { useEffect } from 'react'

import { CardAddTimer } from 'components/CardAddTimer'
import { CardTimer } from 'components/CardTimer'
import Header from 'components/Header'
import { useCookTimer } from 'hooks/useCookTimer'
import { useTimeOut } from 'hooks/useTimeOut'
import Head from 'next/head'

import * as S from './styles'

export default function Timer () {
  const { getAllCookTimers, hasTimerTurnOff } = useCookTimer()
  const { startVerifyTurnOff, stopVerifyTurnOff } = useTimeOut()
  const timers = getAllCookTimers()

  useEffect(() => {
    window.onbeforeunload = () => {
      return true
    }
  }, [])

  useEffect(() => {
    if (!hasTimerTurnOff()) {
      stopVerifyTurnOff()
      return
    }

    startVerifyTurnOff()

    return () => {
      stopVerifyTurnOff()
    }
  }, [hasTimerTurnOff])

  const getCurrentType = (timer: number) => {
    if (!timer) {
      return 'finalMinutes'
    }

    return 'edit'
  }

  return (
    <S.Container>
      <Head>
        <title>Cooker timer</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <S.Main>
        <section>
          <h1>Vamos começar a cozinhar?</h1>
        </section>
        <section className="cardsGrid">
          <CardAddTimer />
          {timers.map(timer => (
            <CardTimer
              key={timer.uuid}
              timer={timer}
              type={getCurrentType(timer.timer)}
            />
          ))}
        </section>
      </S.Main>
    </S.Container>
  )
}