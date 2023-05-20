import { useCallback, useEffect, useRef, useState } from 'react'

import { useCardTimer } from 'contexts/CardTimerContext'
import { useCookTimer } from 'hooks/useCookTimer'
import { useTimeOut } from 'hooks/useTimeOut'
import { getFormattedSeconds } from 'utils/getFormattedSeconds'

import { formattedHour, formattedMinutes, formattedSeconds } from './helper'
import * as S from './styles'
import { CountDownTimerProps } from './types'

export const CountDownTimer = (props: CountDownTimerProps) => {
  const { timer: { timer, uuid, status } } = useCardTimer()

  const [timerInSeconds, setTimerInSeconds] = useState(timer)
  const timerIntervalRef = useRef<any | null>(null)

  const { resetTimer } = useCookTimer()
  const { handleNotifier } = useTimeOut()

  const fetchingStatus = () => {
    if (status === 'turnOff') {
      return 'turnOff'
    }

    if (timerInSeconds === 0) {
      return 'danger'
    }

    return 'normal'
  }

  const {
    hour,
    minutes,
    seconds
  } = getFormattedSeconds(timerInSeconds)

  const stopTimerCounter = useCallback(() => {
    clearInterval(timerIntervalRef.current)
    timerIntervalRef.current = null
    resetTimer(uuid)
    handleNotifier()
  }, [])

  const handlePassTimer = useCallback(() => {
    console.log('render')

    if (timerInSeconds === 0) {
      stopTimerCounter()
      return
    }
    setTimerInSeconds(prevTimer => (prevTimer -= 1))
  }, [timerInSeconds])

  useEffect(() => {
    setTimerInSeconds(timer)
  }, [timer])

  useEffect(() => {
    if (status === 'paused') {
      clearInterval(timerIntervalRef.current)
    }

    if (status === 'run') {
      timerIntervalRef.current = setInterval(handlePassTimer, 1000)
    }

    return () => {
      clearInterval(timerIntervalRef.current)
      timerIntervalRef.current = null
    }
  }, [handlePassTimer, status])

  return (
    <S.TimerLabel status={fetchingStatus()}>
      {`${formattedHour(hour)}${formattedMinutes(minutes)}:${formattedSeconds(seconds)}`}
    </S.TimerLabel>
  )
}
