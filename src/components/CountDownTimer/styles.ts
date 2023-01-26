import { styled } from 'styles'

export const TimerLabel = styled('h1', {
  fontWeight: '$bold',
  fontFamily: '$default',
  fontSize: '$6xl',
  color: '$text',

  variants: {
    warnStyle: {
      true: {
        color: '$error'
      }
    }
  }
})
