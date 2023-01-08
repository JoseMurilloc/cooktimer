import * as Select from '@radix-ui/react-select'
import { styled } from '../../styles'

export const Trigger = styled(Select.Trigger, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  maxHeight: '2.7rem',
  minWidth: 50,
  padding: '$3 $2',

  backgroundColor: '$text_000',
  border: '1px solid $text_400',
  borderRadius: 10,
  cursor: 'pointer'
})

export const Content = styled(Select.Content, {
  display: 'flex',
  alignItems: 'center',

  padding: '$3 $2',
  backgroundColor: '$text_000',
  border: '1px solid $text_400',
  borderRadius: 10,
  cursor: 'pointer',
  boxShadow: '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)'
})
