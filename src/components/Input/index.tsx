import * as S from './styles'
import { TextFieldProps } from "./types";
import { WarningCircle } from "phosphor-react";
import { colors } from "stories/designSystems/colors";

export function Input ({label, hasError, ...props}: TextFieldProps) {
  return (
    <S.ContainerInput>
      <S.Input 
        hasError={hasError} 
        {...props} 
      />
      <label>{label}</label>
      {hasError && <WarningCircle size={20} weight="fill" color={colors.error} />}
    </S.ContainerInput>
  )
}