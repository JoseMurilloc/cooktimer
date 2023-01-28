import { CountDownTimer } from 'components/CountDownTimer'
import { DeleteTimerAlert } from 'components/DeleteTimerAlert'
import { PlayButton } from 'components/PlayButton'
import { useCookTimer } from 'hooks/useCookTimer'
import Image from 'next/image'
import { Pencil, Plus, X } from 'phosphor-react'
import { getUrlByValueSelected } from 'utils/getUrlByValueSelected'

import { AddPlayerPopover } from '../../components/AddPlayerPopover'
import { colors as DesignSystemColors } from '../../stories/designSystems/colors'
import * as S from './styles'
import { CardTimerProps } from './types'

export function CardTimer ({
  type,
  timer
}: CardTimerProps) {
  const { pauseTimer } = useCookTimer()

  const isTimerEnd = type === 'finalMinutes'

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

  if (timer.status === 'turnOff') {
    return (
      <S.ContainerCardTimer screenMode="turnOff">
        <header>
          <S.TimerName>{timer.title}</S.TimerName>
        </header>
        <main>
          <S.WrapperImage turnOff >
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

  return (
    <S.ContainerCardTimer screenMode={type}>
      <header>
        <S.TimerName>{timer.title}</S.TimerName>
      </header>
      <main>
        <S.WrapperImage>
          {
            isTimerEnd
              ? <Image src="/fogo.svg" width={116} height={70} alt="image"/>
              : <Image src={getUrlByValueSelected(timer.icon)} width={116} height={70} alt="image"/>
          }
        </S.WrapperImage>
        <CountDownTimer
          timeInSeconds={timer.timer}
          status={timer.status}
          timerId={timer.uuid}
        />
        <S.BackgroundBorder />
      </main>
      <footer>
       {!isTimerEnd && (
        <S.WrapperIcon around='circle'>
          <AddPlayerPopover timer={timer} mode="edit">
            <button onClick={() => { pauseTimer(timer.uuid) }}>
              <Pencil size="1.5rem" color={DesignSystemColors.primary} />
            </button>
          </AddPlayerPopover>
         </S.WrapperIcon>
       )}
        <PlayButton isTimerEnd={isTimerEnd} timer={timer}/>
       {!isTimerEnd && (
        <S.WrapperIcon around='circle'>
          <DeleteTimerAlert timerId={timer.uuid}>
            <X size="1.5rem" color={DesignSystemColors.primary} />
          </DeleteTimerAlert>
        </S.WrapperIcon>
       )}
      </footer>
      <S.BackgroundBorder dangerMode={isTimerEnd} />
    </S.ContainerCardTimer>
  )
}
