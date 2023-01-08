import * as S from './styles'
import { InputTimerProps } from './types'
import { useFormContext } from 'react-hook-form'
import { NewTimerFormData } from 'components/AddPlayerPopover/types'

export function InputTimer ({label}: InputTimerProps) {
  const { register, formState: { errors } } = useFormContext<NewTimerFormData>()
  
  return (
    <S.ContainerInputTimer>
      <label>{label}</label>
      <S.ContainerInputs>
        <section className="input">
          <S.Input
            hasError={!!errors.timerHour}
            placeholder='00' 
            type="number" 
            min={0}
            max={24}
            {...register('timerHour', {valueAsNumber: true})}
          />
          <span>Horas</span>
        </section>
        <S.SeparatorDot>
          <div className="dot"></div>
          <div className="dot"></div>
        </S.SeparatorDot>
        <section className="input">
          <S.Input
            hasError={!!errors.timerMinutes}
            placeholder='20' 
            type="number" 
            min={0}
            max={59}
            {...register('timerMinutes', {valueAsNumber: true})}
          />
          <span>Minutos</span>
        </section>
      </S.ContainerInputs>
    </S.ContainerInputTimer>
  )
}