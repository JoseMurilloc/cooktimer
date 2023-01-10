import { styled } from '../../styles'

export const ContainerInput = styled('div', {
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  borderRadius: 8,
  transition: 'border 0.3s ease-in-out',

  label: {
    position: 'absolute',
    top: 10,
    left: 10,
    opacity: 0.5,
    transition: '0.5s',
    fontSize: 14,
    color: 'transparent',
    fontFamily: '$default',
    zIndex: -1
  },

  svg: {
    position: 'absolute',
    right: 10,
    top: '0 auto'
  }
})

export const Input = styled('input', {
  border: '1px solid $text_400',
  width: '100%',
  height: '100%',
  backgroundColor: 'transparent',
  padding: '12px 13px',
  borderRadius: 8,
  outline: 'none',

  '&:focus': {
    border: '1px solid $primary'
  },

  '&:focus ~ label': {
    zIndex: 1,
    display: 'block',
    transform: 'translateY(-17px)',
    opacity: 1,
    color: '$primary',
    fontSize: 12,
    backgroundColor: 'white',
    padding: '0 5px'
  },

  variants: {
    hasError: {
      true: {
        border: '1px solid $error_800',

        '&:focus ~ label, &:valid ~ label': {
          transform: 'translateY(-17px)',
          opacity: 1,
          color: '$error',
          fontSize: 12,
          backgroundColor: 'white',
          padding: '0 5px'
        },

        '&:focus': {
          border: '1px solid $error'
        }
      }
    }
  }
})

export const ErrorMessage = styled('span', {
  color: '$error',
  fontSize: '$md',
  fontWeight: '$regular'
})
