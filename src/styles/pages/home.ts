import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  backgroundColor: '#fff',
  paddingTop: '$10',
  gap: '$20'
})

export const Main = styled('main', {
  width: '70rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  'section p': {
    color: '$text_600',
    fontSize: '$md'
  },

  'section h1': {
    fontSize: '$4xl',
    fontWeight: '$medium'
  },

  '.cardsGrid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '$5'
  }
})
