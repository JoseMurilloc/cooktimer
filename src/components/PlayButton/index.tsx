import { TimerDTO } from 'dtos/Timer'
import { useCookTimer } from 'hooks/useCookTimer'
import { Pause, Play } from 'phosphor-react'

import { colors as DesignSystemColors } from '../../stories/designSystems/colors'
import * as S from './styles'

type PlayButtonProps = {
  isTimerEnd: boolean
  timer: TimerDTO
}

const renderPlayIcon = {
  run: <Pause weight="fill" size="1.5rem" color={DesignSystemColors.primary_000}/>,
  paused: <Play weight="fill" size="1.5rem" color={DesignSystemColors.primary_000}/>,
  turnOff: <></>
}

export function PlayButton ({ timer, isTimerEnd }: PlayButtonProps) {
  const { togglePlayTimer, turnOffTimer } = useCookTimer()

  const handleTurnOffTimer = () => {
    turnOffTimer(timer.uuid)
  }

  if (isTimerEnd) {
    return (
      <S.TurnOffButton onClick={handleTurnOffTimer}>
        <span>Desligar</span>
      </S.TurnOffButton>
    )
  }

  return (
    <S.PlayerButton onClick={() => { togglePlayTimer(timer.uuid) }}>
      {renderPlayIcon[timer.status]}
    </S.PlayerButton>
  )
}
