import { ComponentProps } from "react";
import { styled } from "../../styles";

export const ContainerButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '$2 $5',
  border: 'none',
  borderRadius: 8,

  fontFamily: '$default',
  fontSize: '$md',
  fontWeight: '$bold',
  cursor: 'pointer',

  variants: {
    layout: {
      outline: {
        color: '$primary',
        backgroundColor: '$text_000',
        border: '1px solid $primary',
      },
      solid: {
        color: '$text_200',
        backgroundColor: '$primary',
      }
    }
  },

  defaultVariants: {
    layout: 'solid'
  }
})
