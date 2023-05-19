import { useState } from 'react'

import { AddPlayerPopover } from 'components/AddPlayerPopover'
import { Plus } from 'phosphor-react'

import * as S from './styles'
import { CardAddTimerProps } from './types'

export function CardAddTimer (props: CardAddTimerProps) {
  const [isOpenPopover, setIsOpenPopover] = useState(false)

  const togglePopover = () => {
    setIsOpenPopover(prevOpenPopover => !prevOpenPopover)
  }

  return (
    <S.ContainerCardTimer focusPopover={isOpenPopover} screenMode={'add'}>
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
