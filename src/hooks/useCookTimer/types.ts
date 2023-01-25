import { ReactNode } from 'react'

import { CreateCookTimerDTO } from 'dtos/CookTimerDTO'
import { TimerDTO } from 'dtos/Timer'

export interface ICookTimerProps {
  createCookTimer: (timer: CreateCookTimerDTO) => void
  togglePlayTimer: (timerId: string) => void
  removeCookTimer: (timerId: string) => void
  getAllCookTimers: () => TimerDTO[]
}

export interface ICookTimerProviderProps {
  children: ReactNode
}
