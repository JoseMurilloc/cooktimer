import * as S from './styles'
import { InputTimerProps } from './types'

export function InputTimer ({label}: InputTimerProps) {
  return (
    <S.ContainerInputTimer>
      <label>{label}</label>
      <S.ContainerInputs>
        <section className="input">
          <S.Input
            placeholder='00' 
            type="number" 
            min={0}
            max={24}
          />
          <span>Horas</span>
        </section>
        <S.SeparatorDot>
          <div className="dot"></div>
          <div className="dot"></div>
        </S.SeparatorDot>
        <section className="input">
          <S.Input
            placeholder='20' 
            type="number" 
            step={5}
            min={0}
            max={59}
          />
          <span>Minutos</span>
        </section>
      </S.ContainerInputs>
    </S.ContainerInputTimer>
  )
}