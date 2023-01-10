import { TimerDTO } from 'dtos/Timer'

export type CardTimerProps = {
  type: 'add' | 'edit'
  timer?: TimerDTO
}
