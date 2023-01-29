import { styled } from '../../styles'

export const ContainerHeader = styled('header', {
  width: '70rem',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignContent: 'center',

  '.logo': {
    width: '9.375rem',
    backgroundColor: '#D9D9D9',
    borderRadius: 8
  }
})

export const ProfileHeader = styled('aside', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  backgroundColor: '$primary_200',
  padding: '$2 $3',
  borderRadius: 10,

  cursor: 'pointer',

  img: {
    borderRadius: 10
  },

  span: {
    color: '$text_600',
    fontWeight: '$medium',
    fontSize: '$md'
  }
})
