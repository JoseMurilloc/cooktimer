import { TimerDTO } from 'dtos/Timer'

export type CardTimerProps = {
  type: 'add' | 'edit' | 'finalMinutes'
  timer: TimerDTO
}
