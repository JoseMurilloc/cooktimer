import { styled } from 'styles'

export const TimerLabel = styled('h1', {
  fontWeight: '$medium',
  fontFamily: '$default',
  fontSize: '$6xl',
  color: '$text',

  variants: {
    status: {
      danger: {
        color: '$error'
      },
      normal: {
        color: '$text'
      },
      turnOff: {
        color: '$text_600'
      }
    }
  }
})
