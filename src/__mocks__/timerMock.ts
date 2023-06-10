import { TimerDTO } from 'dtos/Timer'

export const MOCKED_TIMER = {
  uuid: 'fake-uuid',
  title: 'Feijão na panela',
  icon: 'pan',
  timer: 600,
  status: 'run'
} satisfies TimerDTO
