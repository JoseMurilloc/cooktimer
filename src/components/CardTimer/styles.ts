import { styled } from "../../styles";

export const ContainerCardTimer = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$text_000',

  padding: '$7',
  gap: 13,
  borderRadius: 7,

  width: '15rem',
  height: '14rem',
  
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingBottom: '$4',
    borderBottom: '0.6px solid #EEEEEE',
  },

  main: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },

  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '$3',
  },

  variants: {
    screenMode: {
      add: {
        border: '1px dashed #C9C9C9',
        justifyContent: 'center',
      },
      edit: {
        justifyContent: 'space-between',
        border: '1px solid #C9C9C9',
      }
    }
  }
})

export const TimerName = styled('span', {
  color: '$text_600',
  fontWeight: '$medium',
  fontSize: '$md',
  fontFamily: '$default'
})


export const Timer = styled('h1', {
  color: '$text',
  fontWeight: '$bold',
  fontFamily: '$secondary',
  fontSize: '$7xl',
})

export const BackgroundBorder = styled('div', {
  position: 'absolute',
  bottom: -1,
  left: 0,
  backgroundColor: '$primary',
  width: '100%',
  height: '0.375rem',
  borderRadius: '0px 0px 8px 8px;'
})

export const PlayerButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 

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
  }
})



export const WrapperIcon = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  backgroundColor: '$primary_200',
  padding: '$3 $2',
  borderRadius: 10,

  cursor: 'pointer',
})