import { useCallback, useState } from 'react'

import { AddPlayerPopover } from 'components/AddPlayerPopover'
import { CountDownTimer } from 'components/CountDownTimer'
import { Modal } from 'components/Modal'
import { PlayButton } from 'components/PlayButton'
import { CardTimerProvider } from 'contexts/CardTimerContext'
import { useCookTimer } from 'hooks/useCookTimer'
import Image from 'next/image'
import { Pencil, X } from 'phosphor-react'
import { colors as DesignSystemColors } from 'stories/designSystems/colors'
import { getUrlByValueSelected } from 'utils/getUrlByValueSelected'

import * as S from './styles'
import { CardTimerProps } from './types'

export function CardTimer ({
  type,
  timer
}: CardTimerProps) {
  const [isOpenPopover, setIsOpenPopover] = useState(false)
  const { pauseTimer } = useCookTimer()

  const CARD_STATUS_MODE = type === 'finalMinutes' ? 'fire' : 'cook'

  const togglePopover = () => {
    setIsOpenPopover(prevOpenPopover => !prevOpenPopover)
  }

  const currentCookTimerStatus = () => {
    if (type === 'finalMinutes') {
      return 'fire'
    }

    return 'normal'
  }

  const renderImage = useCallback(() => {
    if (CARD_STATUS_MODE === 'fire') {
      return (
        <Image
          src="/fogo.svg"
          width={116}
          height={70}
          alt="image"
        />
      )
    }

    return (
      <Image
        src={getUrlByValueSelected(timer.icon)}
        width={116}
        height={70}
        alt="image"
      />
    )
  }, [timer])

  if (timer.status === 'turnOff') {
    return (
      <CardTimerProvider timer={timer}>
        <S.ContainerCardTimer screenMode="turnOff">
          <header>
            <S.TimerName>{timer.title}</S.TimerName>
          </header>
          <main>
            <S.WrapperImage cookStatus="turnOff" >
              <Image src="/fogoApagado.svg" width={116} height={70} alt="image"/>
            </S.WrapperImage>
            <CountDownTimer />
          </main>
          <S.BackgroundBorder turnOff />
        </S.ContainerCardTimer>
      </CardTimerProvider>
    )
  }

  return (
    <CardTimerProvider timer={timer}>
      <S.ContainerCardTimer focusPopover={isOpenPopover} screenMode={type}>
        <header>
          <S.TimerName>{timer.title}</S.TimerName>
        </header>
        <main>
          <S.WrapperImage cookStatus={currentCookTimerStatus()}>
            {renderImage()}
          </S.WrapperImage>
          <CountDownTimer />
          <S.BackgroundBorder />
        </main>
        <footer>
          {CARD_STATUS_MODE === 'cook' && (
            <AddPlayerPopover
              mode="edit"
              isOpen={isOpenPopover}
              togglePopover={togglePopover}
            >
              <S.WrapperIcon around='circle' onClick={() => pauseTimer(timer.uuid)}>
                  <Pencil size="1.5rem" color={DesignSystemColors.primary} />
              </S.WrapperIcon>
            </AddPlayerPopover>
          )}
          <PlayButton isTimerEnd={CARD_STATUS_MODE === 'fire'} />
          {CARD_STATUS_MODE === 'cook' && (
            <S.WrapperIcon around='circle'>
              <X size="1.5rem" color={DesignSystemColors.primary} />
            </S.WrapperIcon>
          )}
        </footer>
        <S.BackgroundBorder dangerMode={CARD_STATUS_MODE === 'fire'} />
      </S.ContainerCardTimer>

      <Modal>
        <h1>Modal</h1>
      </Modal>
    </CardTimerProvider>
  )
}
