import { styled } from '../../styles'

export const ContainerInputTimer = styled('aside', {
  label: {
    fontFamily: '$default',
    fontSize: '$sm',
    fontWeight: '$regular'
  }
})

export const ContainerInputs = styled('div', {
  marginTop: '$2',
  display: 'flex',

  '.input': {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',

    span: {
      position: 'absolute',
      bottom: -20,
      left: 0,
      fontSize: '$sm',
      fontWeight: '$regular',
      color: '$text_600',
      fontFamily: '$default'
    }
  }
})

export const Input = styled('input', {
  backgroundColor: '$text_000',
  border: '1px solid #C9C9C9',
  borderRadius: 8,
  maxWidth: 35,
  padding: '15px 0px 15px 15px',
  outline: 'none',

  color: '$text_800',
  fontSize: '$sm',
  fontFamily: '$default',
  fontWeight: '$regular',

  '&:focus': {
    border: '1px solid $primary'
  },

  variants: {
    hasError: {
      true: {
        border: '1px solid $error'
      }
    }
  },

  defaultVariants: {
    hasError: false
  }
})

export const SeparatorDot = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  margin: '0 9px',
  gap: 6,

  '.dot': {
    backgroundColor: '$text_400',
    width: 5,
    height: 5,
    borderRadius: 3
  }

})
