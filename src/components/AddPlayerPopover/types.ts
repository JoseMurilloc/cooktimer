import { ReactNode } from 'react'

export type NewTimerFormData = {
  icon: string
  title: string
  timerHour: number
  timerMinutes: number
}

export type AddPlayerPopoverProps = {
  children: ReactNode
}
