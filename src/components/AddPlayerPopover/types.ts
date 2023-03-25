import { ReactNode } from 'react'

import { TimerDTO } from 'dtos/Timer'
import * as zod from 'zod'

import { TimerValidationSchema } from './schemas'

export type AddPlayerPopoverProps = {
  children: ReactNode
  mode?: string
  timer?: TimerDTO
  isOpen: boolean
  togglePopover: () => void
}

export type NewTimerFormData = zod.infer<typeof TimerValidationSchema>
