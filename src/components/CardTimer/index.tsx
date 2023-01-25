import { CountDownTimer } from 'components/CountDownTimer'
import { DeleteTimerAlert } from 'components/DeleteTimerAlert'
import { useCookTimer } from 'hooks/useCookTimer'
import Image from 'next/image'
import { Pause, Pencil, Play, Plus, X } from 'phosphor-react'
import { getUrlByValueSelected } from 'utils/getUrlByValueSelected'

import { AddPlayerPopover } from '../../components/AddPlayerPopover'
import { colors as DesignSystemColors } from '../../stories/designSystems/colors'
import * as S from './styles'
import { CardTimerProps } from './types'

export function CardTimer ({
  type,
  timer
}: CardTimerProps) {
  const { togglePlayTimer } = useCookTimer()

  if (type === 'add' && !timer) {
    return (
      <S.ContainerCardTimer focusPopover={false} screenMode={type}>
        <AddPlayerPopover>
          <S.Add>
            <div className="content">
              <Plus size={22} weight="fill" color="#FFF9F2" />
            </div>
          </S.Add>
        </AddPlayerPopover>
      </S.ContainerCardTimer>
    )
  }

  if (!timer) {
    return null
  }

  return (
    <S.ContainerCardTimer screenMode={type}>
      <header>
        <S.TimerName>{timer.title}</S.TimerName>
      </header>
      <main>
        <S.WrapperImage>
          <Image
            src={getUrlByValueSelected(timer.icon)}
            width={116}
            height={70}
            alt="image"
          />
        </S.WrapperImage>
        <CountDownTimer
          timeInSeconds={timer.timer}
          status={timer.status}
        />
      </main>
      <footer>
        <S.WrapperIcon around='circle'>
          <AddPlayerPopover timer={timer} mode="edit">
            <Pencil
              size="1.5rem"
              color={DesignSystemColors.primary}
            />
          </AddPlayerPopover>
        </S.WrapperIcon>
        <S.PlayerButton onClick={() => { togglePlayTimer(timer.uuid) }}>
           {timer.status === 'run'
             ? (
                <Pause
                  weight="fill"
                  size="1.5rem"
                  color={DesignSystemColors.primary_000}
                />
               )
             : (
                <Play
                  weight="fill"
                  size="1.5rem"
                  color={DesignSystemColors.primary_000}
                />
               )}
        </S.PlayerButton>
        <S.WrapperIcon around='circle'>
          <DeleteTimerAlert timerId={timer.uuid}>
            <X
              size="1.5rem"
              color={DesignSystemColors.primary}
            />
          </DeleteTimerAlert>
        </S.WrapperIcon>
      </footer>
      <S.BackgroundBorder />
    </S.ContainerCardTimer>
  )
}
