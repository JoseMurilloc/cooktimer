import { styled } from '../../styles'

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

export const TurnOffButton = styled('button', {

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  backgroundColor: '$error_600',
  border: 'none',
  padding: '5px 24px',

  maxHeight: '1.8rem',
  borderRadius: 8,
  cursor: 'pointer',
  boxShadow: '0 0.4rem #F68C74',
  transition: '0.2s all',

  span: {
    color: '$primary_000',
    fontFamily: '$default',
    fontWeight: '$bold',
    fontSize: '1rem',
    textAlign: 'center'
  },

  '&:active': {
    boxShadow: '0 0rem #F68C74',
    transform: 'translateY(0.4rem)'
  }
})
