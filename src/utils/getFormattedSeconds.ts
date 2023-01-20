export function getFormattedSeconds (timerInSeconds: number) {
  const hour = Math.floor(Math.floor(timerInSeconds / 60) / 60)
  const minutes = Math.floor(timerInSeconds / 60) - (60 * hour)
  const seconds = timerInSeconds % 60

  return {
    hour,
    minutes,
    seconds
  }
}
