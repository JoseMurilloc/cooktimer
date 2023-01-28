export type CountDownTimerProps = {
  timeInSeconds: number
  status: 'run' | 'paused' | 'turnOff'
  timerId: string
}

export interface CountDownTimerHandles {
  isFinalMinute: boolean
}
