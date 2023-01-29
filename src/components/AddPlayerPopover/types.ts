import { ReactNode } from 'react'

import { TimerDTO } from 'dtos/Timer'

export type NewTimerFormData = {
  icon: string
  title: string
  timerHour: number
  timerMinutes: number
}

export type AddPlayerPopoverProps = {
  children: ReactNode
  mode?: string
  timer?: TimerDTO
  isOpen: boolean
  togglePopover: () => void
}
