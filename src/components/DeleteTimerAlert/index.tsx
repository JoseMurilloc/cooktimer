import { useCallback } from 'react'

import * as AlertDialog from '@radix-ui/react-alert-dialog'
import { Button } from 'components/Button'
import { useCookTimer } from 'hooks/useCookTimer'
import Image from 'next/image'
import { X } from 'phosphor-react'

import * as S from './styles'
import { DeleteTimerAlertProps } from './types'

export function DeleteTimerAlert ({
  children,
  timerId
}: DeleteTimerAlertProps) {
  const { removeCookTimer } = useCookTimer()

  const handleDeleteTimer = useCallback(() => {
    removeCookTimer(timerId)
  }, [timerId])

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        {children}
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <S.Overlay />
        <S.Content>
            <Image src="/X.svg" width={120} height={120} alt="logoClose"/>
            <S.Title className="AlertDialogTitle">Cancelar time?</S.Title>
            <S.Description>
              O time com o nome Arroz marcado para estar pronto em 32:00
              minutos vai ser retirado dos demais
            </S.Description>
            <S.Footer>
            <AlertDialog.Action asChild>
              <Button>
                Manter
              </Button>
            </AlertDialog.Action>
            <Button onClick={handleDeleteTimer} layout='outline'>
              Cancelar
            </Button>
            </S.Footer>
            <AlertDialog.Action asChild>
              <S.CloseModal>
                <X color="#444" size={16} weight="fill" />
              </S.CloseModal>
            </AlertDialog.Action>
        </S.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
