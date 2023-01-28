export type TimerDTO = {
  uuid: string
  title: string
  icon: string
  timer: number
  status: 'run' | 'paused' | 'turnOff'
}
