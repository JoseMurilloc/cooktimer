import { globalCss } from '.'

export const globalStyles = globalCss({
  html: {
    boxSizing: 'border-box',
    fontSize: 16,
    fontFamily: 'Nunito'
  },

  '*, body': {
    margin: 0,
    padding: 0
  },

  'ol, ul': {
    listStyle: 'none'
  },

  img: {
    maxWidth: '100%',
    height: 'auto'
  },

  '@media(min-width: 760px)': {
    html: {
      fontSize: '70%'
    }
  },

  '@media(min-width: 1024px)': {
    html: {
      fontSize: '80%'
    }
  },

  '@media(min-width: 1200px)': {
    html: {
      fontSize: '90%'
    }
  },

  '@media(min-width: 1600px)': {
    html: {
      fontSize: '100%'
    }
  }
})
