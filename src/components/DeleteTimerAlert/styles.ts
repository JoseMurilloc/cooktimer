import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { styled } from 'styles'

export const Overlay = styled(AlertDialog.Overlay, {
  backgroundColor: '#111111cc',
  position: 'fixed',
  inset: 0
})

export const Content = styled(AlertDialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$5',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: 'white',
  borderRadius: '1rem',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',

  padding: '1rem 0.6875rem'
})

export const Footer = styled('footer', {
  display: 'flex',
  gap: '1.5625rem',
  justifyContent: 'flex-end'
})

export const CloseModal = styled('button', {
  position: 'absolute',
  right: 20,
  top: 19,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: 'none'
})

export const Title = styled(AlertDialog.Title, {
  fontFamily: '$default',
  fontWeight: '$medium',
  lineHeight: '1.56254rem',
  fontSize: '$2xl',
  color: '$text_600'
})

export const Description = styled(AlertDialog.Description, {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$md',
  color: '#838383',
  width: '25.75rem',
  textAlign: 'center'
})
