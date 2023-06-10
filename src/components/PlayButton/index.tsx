import { useCardTimer } from 'contexts/CardTimerContext'
import { useCookTimer } from 'hooks/useCookTimer'
import { useTurnOffSound } from 'lib/useSound'
import { Pause, Play } from 'phosphor-react'

import { colors as DesignSystemColors } from '../../stories/designSystems/colors'
import * as S from './styles'

type PlayButtonProps = {
  isTimerEnd: boolean
}

const renderPlayIcon = {
  run: <Pause data-testid="icon-run" weight="fill" size="1.5rem" color={DesignSystemColors.primary_000}/>,
  paused: <Play data-testid="icon-paused" weight="fill" size="1.5rem" color={DesignSystemColors.primary_000}/>,
  turnOff: <></>
}

export function PlayButton ({ isTimerEnd }: PlayButtonProps) {
  const { togglePlayTimer, turnOffTimer } = useCookTimer()
  const { timer } = useCardTimer()
  const { play } = useTurnOffSound()

  const handleTurnOffTimer = () => {
    play()
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
    <S.PlayerButton onClick={() => togglePlayTimer(timer.uuid)}>
      {renderPlayIcon[timer.status]}
    </S.PlayerButton>
  )
}
