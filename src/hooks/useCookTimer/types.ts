import { ReactNode } from 'react'

import { CreateCookTimerDTO } from 'dtos/CookTimerDTO'
import { TimerDTO } from 'dtos/Timer'

export interface ICookTimerProps {
  createCookTimer: (timer: CreateCookTimerDTO) => void
  togglePlayTimer: (timerId: string) => void
  updatePlayTimer: (timerUpdated: TimerDTO) => void
  turnOffTimer: (timerId: string) => void
  removeCookTimer: (timerId: string) => void
  pauseTimer: (timerId: string) => void
  getAllCookTimers: () => TimerDTO[]
  resetTimer: (timerId: string) => void
  isTurnOff: (timerId: string) => boolean
}

export interface ICookTimerProviderProps {
  children: ReactNode
}
