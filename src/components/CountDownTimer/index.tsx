import { useCallback, useEffect, useMemo, useState } from 'react'

import { useCookTimer } from 'hooks/useCookTimer'
import { getFormattedSeconds } from 'utils/getFormattedSeconds'

import * as S from './styles'
import { CountDownTimerProps } from './types'

export const CountDownTimer = ({
  timeInSeconds,
  status,
  timerId
}: CountDownTimerProps) => {
  const [timer, setTimer] = useState(timeInSeconds)
  const [isFinalMinute, setIsFinalMinutes] = useState(false)

  const { resetTimer } = useCookTimer()

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
  } = getFormattedSeconds(timer)

  useEffect(() => {
    setTimer(timeInSeconds)
  }, [timeInSeconds])

  useEffect(() => {
    if (minutes === 0 && hour === 0 && seconds === 0) {
      setIsFinalMinutes(true)
      resetTimer(timerId)
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
      setTimeout(() => { setTimer(prevTimer => (prevTimer -= 1)) }, 1000)
    }
  }, [status])

  useEffect(() => {
    if (timer > 0) {
      countDown()
    }
  }, [timer, countDown])

  return <S.TimerLabel status={fetchingStatus()}>{`${formattedHour}${formattedMinutes}:${formattedSeconds}`}</S.TimerLabel>
}
