import { createContext, useCallback, useContext, useState } from 'react'

import { CreateCookTimerDTO } from 'dtos/CookTimerDTO'
import { TimerDTO } from 'dtos/Timer'
import { v4 as uuidv4 } from 'uuid'

import { ICookTimerProps, ICookTimerProviderProps } from './types'

const CookTimerContext = createContext<ICookTimerProps>(
  {} as ICookTimerProps
)

const CookTimerProvider = ({ children }: ICookTimerProviderProps) => {
  const [timers, setTimers] = useState<TimerDTO[]>([])

  const removeCookTimer = useCallback((timerId: string) => {
    setTimers(
      currentTimers =>
        currentTimers.filter(
          timer => timer.uuid !== timerId
        )
    )
  }, [])

  const updatePlayTimer = useCallback((timerUpdated: TimerDTO) => {
    setTimers(
      currentTimers =>
        currentTimers.map(currentTimer => {
          if (currentTimer.uuid !== timerUpdated.uuid) return currentTimer
          return timerUpdated
        })
    )
  }, [])

  const togglePlayTimer = useCallback((timerId: string) => {
    setTimers(
      currentTimers =>
        currentTimers.map(timer => {
          if (timer.uuid !== timerId) return timer
          return {
            ...timer,
            status: timer.status === 'paused' ? 'run' : 'paused'
          }
        })
    )
  }, [])

  const getAllCookTimers = () => timers

  const createCookTimer = useCallback((timer: CreateCookTimerDTO) => {
    const { timerMinutes, timerHour, title, icon } = timer
    const secondsTimer = ((timerHour * 60) + timerMinutes) * 60

    const createTimer = {
      uuid: uuidv4(),
      icon,
      title,
      timer: secondsTimer,
      status: 'run' as 'run'
    }

    setTimers(presetTimers => [...presetTimers, createTimer])
  }, [])

  const pauseTimer = useCallback((timerId: string) => {
    setTimers(
      currentTimers =>
        currentTimers.map(timer => {
          if (timer.uuid !== timerId) return timer
          return {
            ...timer,
            status: 'paused'
          }
        })
    )

    return true
  }, [])

  const resetTimer = useCallback((timerId: string) => {
    const findTimer = timers.find(timer => timer.uuid === timerId)

    if (!findTimer) {
      return
    }

    updatePlayTimer({
      ...findTimer,
      timer: 0
    })
  }, [timers])

  const turnOffTimer = useCallback((timerId: string) => {
    const findTimer = timers.find(timer => timer.uuid === timerId)

    if (!findTimer) {
      return
    }

    updatePlayTimer({
      ...findTimer,
      status: 'turnOff'
    })
  }, [timers])

  const hasTimerTurnOff = useCallback(() => {
    return timers.some(timer => timer.status !== 'turnOff' && timer.timer === 0)
  }, [timers])

  return (
    <CookTimerContext.Provider value={{
      hasTimerTurnOff,
      createCookTimer,
      togglePlayTimer,
      getAllCookTimers,
      removeCookTimer,
      updatePlayTimer,
      pauseTimer,
      resetTimer,
      turnOffTimer
    }}>
      {children}
    </CookTimerContext.Provider>
  )
}

const useCookTimer = () => {
  return useContext(CookTimerContext)
}

export { useCookTimer, CookTimerProvider }
