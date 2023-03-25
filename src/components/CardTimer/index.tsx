import { useMemo, useState } from 'react'

import { AddPlayerPopover } from 'components/AddPlayerPopover'
import { CountDownTimer } from 'components/CountDownTimer'
import { Modal } from 'components/Modal'
import { PlayButton } from 'components/PlayButton'
import { useCookTimer } from 'hooks/useCookTimer'
import Image from 'next/image'
import { Pencil, Plus, X } from 'phosphor-react'
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

  const cardMode = type === 'finalMinutes' ? 'fire' : 'cook'

  const togglePopover = () => {
    setIsOpenPopover(prevOpenPopover => !prevOpenPopover)
  }

  if (type === 'add' && !timer) {
    return (
      <S.ContainerCardTimer focusPopover={isOpenPopover} screenMode={type}>
        <AddPlayerPopover isOpen={isOpenPopover} togglePopover={togglePopover}>
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

  const renderImage = useMemo(() => ({
    fire: <Image src="/fogo.svg" width={116} height={70} alt="image"/>,
    cook: <Image src={getUrlByValueSelected(timer.icon)} width={116} height={70} alt="image"/>
  }), [timer])

  if (timer.status === 'turnOff') {
    return (
      <S.ContainerCardTimer screenMode="turnOff">
        <header>
          <S.TimerName>{timer.title}</S.TimerName>
        </header>
        <main>
          <S.WrapperImage cookStatus="turnOff" >
            <Image src="/fogoApagado.svg" width={116} height={70} alt="image"/>
          </S.WrapperImage>
          <CountDownTimer
            timeInSeconds={timer.timer}
            status={timer.status}
            timerId={timer.uuid}
          />
        </main>
        <S.BackgroundBorder turnOff />
      </S.ContainerCardTimer>
    )
  }

  const currentCookTimerStatus = (currentType: string) => {
    if (type === 'finalMinutes') {
      return 'fire'
    }

    return 'normal'
  }

  return (
    <>
      <S.ContainerCardTimer focusPopover={isOpenPopover} screenMode={type}>
        <header>
          <S.TimerName>{timer.title}</S.TimerName>
        </header>
        <main>
          <S.WrapperImage cookStatus={currentCookTimerStatus(type)}>
            {renderImage[cardMode]}
          </S.WrapperImage>
          <CountDownTimer
            timeInSeconds={timer.timer}
            status={timer.status}
            timerId={timer.uuid}
          />
          <S.BackgroundBorder />
        </main>
        <footer>
          {cardMode === 'cook' && (
            <AddPlayerPopover
              timer={timer}
              mode="edit"
              isOpen={isOpenPopover}
              togglePopover={togglePopover}
            >
              <S.WrapperIcon around='circle' onClick={() => { pauseTimer(timer.uuid) } }>
                  <Pencil size="1.5rem" color={DesignSystemColors.primary} />
              </S.WrapperIcon>
            </AddPlayerPopover>
          )}
          <PlayButton isTimerEnd={cardMode === 'fire'} timer={timer}/>
          {cardMode === 'cook' && (
            <S.WrapperIcon around='circle'>
              <X size="1.5rem" color={DesignSystemColors.primary} />
            </S.WrapperIcon>
          )}
        </footer>
        <S.BackgroundBorder dangerMode={cardMode === 'fire'} />
      </S.ContainerCardTimer>

      <Modal>
        <h1>Modal</h1>
      </Modal>
    </>
  )
}
