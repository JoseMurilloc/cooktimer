import { ReactNode } from 'react'

import { TimerDTO } from 'dtos/Timer'

export interface CardTimerProviderProps {
  children: ReactNode
  timer: TimerDTO
}

export interface CardTimerContextData {
  timer: TimerDTO
}
