export type CountDownTimerProps = {
  timeInSeconds: number
  status: 'run' | 'paused'
  timerId: string
}

export interface CountDownTimerHandles {
  isFinalMinute: boolean
}
