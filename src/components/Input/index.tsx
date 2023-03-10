import { useFormContext } from 'react-hook-form'

import { WarningCircle } from 'phosphor-react'

import { colors } from '../../stories/designSystems/colors'
import * as S from './styles'
import { TextFieldProps } from './types'

export function Input ({ registerName, label, hasError, ...props }: TextFieldProps) {
  const { register } = useFormContext()

  return (
    <S.ContainerInput>
      <S.Input
        hasError={hasError}
        {...props}
        {...register(registerName)}
      />
      <label>{label}</label>
      {hasError && <WarningCircle size={20} weight="fill" color={colors.error} />}
    </S.ContainerInput>
  )
}
