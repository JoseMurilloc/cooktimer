import { styled } from '../../styles'

export const ContainerCardTimer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$text_000',

  padding: '$7',
  gap: 13,
  borderRadius: 7,

  width: '13.75rem',
  height: '23.12rem',
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
