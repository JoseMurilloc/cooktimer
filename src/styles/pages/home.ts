import { styled } from '..'

export const Container = styled('div', {
  display: 'block',
  width: '100vw'
})

export const Main = styled('main', {
  maxWidth: '70rem',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  'section p': {
    color: '$text_600',
    fontSize: '$md'
  },

  'section > h1': {
    fontSize: '$6xl',
    fontWeight: '$bold',
    width: 500,
    color: '$text_600'
  },

  '.cardsGrid': {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '$5'
  }
})
