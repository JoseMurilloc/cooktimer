import { styled, keyframes } from 'styles'

const blowUpAnimation = keyframes({
  from: { transform: 'scale(0)' },
  to: { transform: 'scale(1)' }
})

export const ContainerModal = styled('aside', {
  display: 'none',
  width: '100vw',
  height: '100vh',
  position: 'fixed',
  zIndex: 1000,
  inset: 0
})

export const Overlay = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.75)',
  backdropFilter: 'blur(5px)'
})

export const ContentModal = styled('div', {
  position: 'fixed',
  inset: 0,
  margin: 'auto',
  width: 'fit-content',
  height: 'fit-content',
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  animation: `${blowUpAnimation} 0.3s ease`
})
