import { styled } from "../../styles";

export const ContainerCardTimer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 

  padding: 20,
  gap: 13,
  border: '1px dashed #C9C9C9',
  borderRadius: 7,

  width: '15rem',
  height: '13.125rem',
})

export const PlayerButton = styled('button', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 

  backgroundColor: '$primary_200',
  width: '3.62rem',
  height: '3.62rem',
  borderRadius: '1.75rem',
  border: 'none',
  cursor: 'pointer',

  div: {
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
