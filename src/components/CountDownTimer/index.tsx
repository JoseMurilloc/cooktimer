import { useCallback, useEffect, useMemo, useState } from 'react'

import * as S from './styles'

type CountDownTimerProps = {
  timeInSeconds: number
  status: 'run' | 'paused'
}

export const CountDownTimer = ({ timeInSeconds, status }: CountDownTimerProps) => {
  const [timer, setTimer] = useState(timeInSeconds)

  const hour = Math.floor(Math.floor(timer / 60) / 60)
  const minutes = Math.floor(timer / 60) - (60 * hour)
  const seconds = timer % 60

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
    if (hour < 10) {
      return `0${hour}`
    }

    return hour
  }, [hour])

  const countDown = useCallback(() => {
    if (status === 'run') {
      setTimeout(() => { setTimer(prevTimer => (prevTimer -= 1)) }, 1000)
    }
  }, [])

  useEffect(() => {
    if (timer > 0) {
      countDown()
    }
  }, [timer, countDown])

  return <S.TimerLabel>{`${formattedHour}:${formattedMinutes}:${formattedSeconds}`}</S.TimerLabel>
}
