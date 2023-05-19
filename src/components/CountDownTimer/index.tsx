import { useCallback, useEffect, useMemo, useState } from 'react'

import { useCardTimer } from 'contexts/CardTimerContext'
import { useCookTimer } from 'hooks/useCookTimer'
import { useTimeOut } from 'hooks/useTimeOut'
import { getFormattedSeconds } from 'utils/getFormattedSeconds'

import * as S from './styles'
import { CountDownTimerProps } from './types'

export const CountDownTimer = (props: CountDownTimerProps) => {
  const { timer: { timer, uuid, status } } = useCardTimer()

  const [timerInSeconds, setTimerInSeconds] = useState(timer)
  const [isFinalMinute, setIsFinalMinutes] = useState(false)

  const { resetTimer } = useCookTimer()
  const { handleNotifier } = useTimeOut()

  const fetchingStatus = () => {
    if (status === 'turnOff') {
      return 'turnOff'
    }

    if (isFinalMinute) {
      return 'danger'
    }

    return 'normal'
  }

  const {
    hour,
    minutes,
    seconds
  } = getFormattedSeconds(timerInSeconds)

  useEffect(() => {
    setTimerInSeconds(timer)
  }, [timer])

  useEffect(() => {
    if (minutes === 0 && hour === 0 && seconds === 0) {
      handleNotifier().catch(x => { console.log(x) })
      setIsFinalMinutes(true)
      resetTimer(uuid)
    }
  }, [hour, minutes, seconds])

  const formattedSeconds = useMemo(() => {
    if (seconds < 10) {
      return `0${seconds}`
    }

    return seconds
  }, [seconds])

  const formattedMinutes = useMemo(() => {
    if (minutes < 10) {
      return `0${minutes}`
    }

    return minutes
  }, [minutes])

  const formattedHour = useMemo(() => {
    if (hour === 0) {
      return ''
    }
    if (hour < 10) {
      return `0${hour}:`
    }

    return hour
  }, [hour])

  const countDown = useCallback(() => {
    if (status === 'run') {
      setTimeout(() => { setTimerInSeconds(prevTimer => (prevTimer -= 1)) }, 1000)
    }
  }, [status])

  useEffect(() => {
    if (timerInSeconds > 0) {
      countDown()
    }
  }, [timerInSeconds, countDown])

  return (
    <S.TimerLabel status={fetchingStatus()}>
      {`${formattedHour}${formattedMinutes}:${formattedSeconds}`}
    </S.TimerLabel>
  )
}
