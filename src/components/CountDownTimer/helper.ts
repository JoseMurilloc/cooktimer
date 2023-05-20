const formattedSeconds = (seconds: number) => {
  if (seconds < 10) {
    return `0${seconds}`
  }

  return seconds
}

const formattedMinutes = (minutes: number) => {
  if (minutes < 10) {
    return `0${minutes}`
  }

  return minutes
}

const formattedHour = (hour: number) => {
  if (hour === 0) {
    return ''
  }
  if (hour < 10) {
    return `0${hour}:`
  }

  return hour
}

export {
  formattedHour,
  formattedMinutes,
  formattedSeconds
}
