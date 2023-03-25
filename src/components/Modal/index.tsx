import { createPortal } from 'react-dom'

import * as S from './styles'
import { ModalProps } from './types'

export function Modal ({
  children
}: ModalProps) {
  const modalElement = document.getElementById('modal-root')

  if (!modalElement) return null

  return createPortal(
    <S.ContainerModal>
      <S.Overlay/>
      <S.ContentModal>
        {children}
      </S.ContentModal>
    </S.ContainerModal>,
    modalElement
  )
}
