import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100vw',
  backgroundColor: '#fff',
  paddingTop: '$10',
  gap: '$20',
})

export const Main = styled('main', {
  width: '70rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',

  'section h1': {
    fontWeight: '$bold',
    fontSize: '$5xl',
    color: '$text',
  },

  'section p': {
    color: '$text_400',
    fontSize: '$md',
  },

  '.cardsGrid':{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '$5'
  }
})