import { ReactNode } from 'react'

import { CreateCookTimerDTO } from 'dtos/CookTimerDTO'
import { TimerDTO } from 'dtos/Timer'

export interface ICookTimerProps {
  createCookTimer: (timer: CreateCookTimerDTO) => void
  getAllCookTimers: () => TimerDTO[]
}

export interface ICookTimerProviderProps {
  children: ReactNode
}

export type TStatus = 'idle' | 'loading' | 'success' | 'error'
