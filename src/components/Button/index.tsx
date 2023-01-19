import * as S from './styles'
import { ButtonProps } from './types'

export function Button ({ children, layout, ...props }: ButtonProps) {
  return (
    <S.ContainerButton layout={layout} {...props}>
      {children}
    </S.ContainerButton>
  )
}
