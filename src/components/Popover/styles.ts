import { styled } from "../../styles";
import * as Popover from '@radix-ui/react-popover';

export const AddPlayerButton = styled(Popover.Trigger, {
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

export const Content = styled(Popover.Content, {
  backgroundColor: '#FDFDFD',
  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.13)',
  borderRadius: 12,
  minWidth: 302,
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',


  '.arrow': {
    fill: '#FDFDFD',
    stroke: '#FDFDFD',
    width: '2.5rem',
    height: '1.5625rem',
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '.closeButton': {
    backgroundColor: 'transparent',
    border: 'none',
    marginRight: 10,
    cursor: 'pointer'
  },

  h1: {
    color: '$text',
    fontFamily: '$default',
    fontWeight: '$medium',
    fontSize: '$xl',
  }
})

export const BorderBackgroundLeft = styled('div', {
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: '$primary_600',
  minHeight: '100%',
  borderRadius: '0px 8px 8px 0px;',
  width: '0.325rem'
})

