import { CountDownTimer } from 'components/CountDownTimer'
import Image from 'next/image'
import { Pause, Pencil, X } from 'phosphor-react'
import { getUrlByValueSelected } from 'utils/getUrlByValueSelected'

import { AddPlayerPopover } from '../../components/AddPlayerPopover'
import { colors as DesignSystemColors } from '../../stories/designSystems/colors'
import * as S from './styles'
import { CardTimerProps } from './types'

export function CardTimer ({
  type,
  timer
}: CardTimerProps) {
  if (type === 'add' && !timer) {
    return (
      <S.ContainerCardTimer screenMode={type}>
        <AddPlayerPopover />
      </S.ContainerCardTimer>
    )
  }

  if (!timer) {
    return null
  }

  return (
    <S.ContainerCardTimer screenMode={type}>
      <header>
        <S.TimerName>{timer?.title}</S.TimerName>
        <S.WrapperIcon>
          <Image
            src={getUrlByValueSelected(timer.icon)}
            width={25}
            height={25}
            alt="image"
          />
        </S.WrapperIcon>
      </header>
      <main>
        <CountDownTimer
          timeInSeconds={timer?.timer}
          status={timer.status}
        />
      </main>
      <footer>
        <S.WrapperIcon around='circle'>
          <Pencil
            size="1.5rem"
            color={DesignSystemColors.primary}
          />
        </S.WrapperIcon>
        <S.PlayerButton>
           <Pause
            weight="fill"
            size="1.5rem"
            color={DesignSystemColors.primary_000}
           />
        </S.PlayerButton>
        <S.WrapperIcon around='circle'>
          <X
            size="1.5rem"
            color={DesignSystemColors.primary}
          />
        </S.WrapperIcon>
      </footer>
      <S.BackgroundBorder />
    </S.ContainerCardTimer>
  )
}
