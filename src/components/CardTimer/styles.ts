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
        border: '1px dashed $text_400',
        justifyContent: 'center'
      },
      edit: {
        justifyContent: 'space-between',
        border: '1px solid $text_400'
      },
      finalMinutes: {
        justifyContent: 'space-between',
        border: '1px solid $error_200',
        background: '$primary_200'
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

  backgroundColor: '$primary_200',
  width: '3.62rem',
  height: '3.62rem',
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
  }
})

export const WrapperImage = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  minHeight: '8rem',
  alignItems: 'center',
  // padding: '1.8125rem auto',
  backgroundColor: '$primary_200',
  width: '100%',
  borderRadius: 15
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
    }
  },

  defaultVariants: {
    dangerMode: false
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
