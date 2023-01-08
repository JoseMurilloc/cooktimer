import { ButtonProps } from './types'
import * as S from './styles'

export function Button ({ children, layout, ...props }: ButtonProps) {
  return (
    <S.ContainerButton layout={layout} {...props}>
      {children}
    </S.ContainerButton>
  )
}
