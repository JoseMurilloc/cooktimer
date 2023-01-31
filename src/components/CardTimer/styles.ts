import { styled } from '../../styles'

export const ContainerCardTimer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$text_000',
  minHeight: '21.125rem',

  padding: '$7',
  gap: 13,
  borderRadius: 7,

  width: '15rem',
  transition: 'background-color 0.5s ease',

  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '$4'
  },

  main: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$3'
  },

  variants: {
    screenMode: {
      add: {
        border: '1px dashed $text_200',
        justifyContent: 'center'
      },
      edit: {
        justifyContent: 'space-between',
        border: '1px solid $text_200'
      },
      finalMinutes: {
        justifyContent: 'space-between',
        border: '1px solid $error_200',
        background: '$primary_200'
      },
      turnOff: {
        border: '1px solid $text_200',
        backgroundColor: '$text_000'
      }
    },
    focusPopover: {
      true: {
        backgroundColor: '$primary_000'
      }
    }
  },

  defaultVariants: {
    focusPopover: false
  }
})

export const Add = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$primary_000',
  width: '4.8rem',
  height: '4.8rem',
  borderRadius: '3rem',
  border: 'none',
  cursor: 'pointer',

  '.content': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '3rem',
    height: '3rem',
    borderRadius: '1.75rem',
    backgroundColor: '$primary'
  }
})

export const WrapperImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  minHeight: '8rem',
  alignItems: 'center',
  width: '100%',
  borderRadius: 15,

  variants: {
    cookStatus: {
      normal: {
        backgroundColor: '$primary_000'
      },
      turnOff: {
        backgroundColor: 'transparent',
        marginBottom: '1.25rem'
      },
      fire: {
        backgroundColor: '$primary_200'
      }
    }
  },

  defaultVariants: {
    cookStatus: 'normal'
  }
})

export const TimerName = styled('span', {
  color: '$text_600',
  fontWeight: '$medium',
  fontSize: '$md',
  fontFamily: '$default'
})

export const BackgroundBorder = styled('div', {
  position: 'absolute',
  bottom: -1,
  left: 0,
  backgroundColor: '$primary',
  width: '100%',
  height: '0.375rem',
  borderRadius: '0px 0px 8px 8px',

  variants: {
    dangerMode: {
      true: {
        backgroundColor: '$error_600'
      }
    },
    turnOff: {
      true: {
        backgroundColor: '$text_400'
      }
    }
  },

  defaultVariants: {
    dangerMode: false,
    turnOff: false
  }
})

export const PlayerButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'all 0.3s ease-in-out',

  backgroundColor: '$primary',
  padding: '$4',
  borderRadius: '1.75rem',
  border: 'none',
  cursor: 'pointer',

  '.content': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',

    width: '2.44rem',
    height: '2.44rem',
    borderRadius: '1.75rem',
    backgroundColor: '$primary'
  },

  '&:hover': {
    filter: 'grayscale(25%)'
  }
})

export const WrapperIcon = styled('button', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$primary_200',
  padding: '$3 $2',
  border: 'none',

  cursor: 'pointer',

  button: {
    backgroundColor: 'transparent',
    border: 'none'
  },

  variants: {
    around: {
      circle: {
        borderRadius: '50%'
      },
      normal: {
        borderRadius: 10
      }
    }
  },

  defaultVariants: {
    around: 'normal'
  }
})
