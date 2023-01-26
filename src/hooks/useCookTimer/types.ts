import { ReactNode } from 'react'

import { CreateCookTimerDTO } from 'dtos/CookTimerDTO'
import { TimerDTO } from 'dtos/Timer'

export interface ICookTimerProps {
  createCookTimer: (timer: CreateCookTimerDTO) => void
  togglePlayTimer: (timerId: string) => void
  updatePlayTimer: (timerUpdated: TimerDTO) => void
  removeCookTimer: (timerId: string) => void
  pauseTimer: (timerId: string) => void
  getAllCookTimers: () => TimerDTO[]
  getScreenMode: (isFinalMinute: boolean, currentType: 'add' | 'edit' | 'finalMinutes') => 'add' | 'edit' | 'finalMinutes'
  resetTimer: (timerId: string) => void
}

export interface ICookTimerProviderProps {
  children: ReactNode
}
