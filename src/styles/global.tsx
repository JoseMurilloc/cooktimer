import { globalCss } from ".";

export const globalStyles = globalCss({
  'html': {
    boxSizing: 'border-box',
    fontSize: 16,
    fontFamily: 'Nunito'
  },
  
  '*, body': {
    margin: 0,
    padding: 0,
  },
  
  'ol, ul': {
    listStyle: 'none',
  },
  
  'img': {
    maxWidth: '100%',
    height: 'auto',
  }
})