import { styled } from '../../styles'

export const ContainerHeader = styled('header', {
  position: 'relative',
  width: '100%',
  height: '6.5rem',
  backgroundColor: '#FFFBF8',
  boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.08)',
  marginBottom: '3.4rem',

  '.content': {
    maxWidth: '70rem',
    margin: 'auto',
    height: 'calc(100% - 2rem)',
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center'
  },

  '.logo': {
    position: 'relative',
    height: '100%',
    width: '9.375rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export const ProfileHeader = styled('nav', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'row',
  gap: 85,

  a: {
    gap: 10
  },

  'li, a': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    listStyleType: 'none',
    textDecoration: 'none',
    fontSize: '1rem',
    color: '#1B1F23'
  }
})
