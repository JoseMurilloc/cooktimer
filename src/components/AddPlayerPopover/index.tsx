import { useCallback, useEffect } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Popover from '@radix-ui/react-popover'
import { useCardTimer } from 'contexts/CardTimerContext'
import { useCookTimer } from 'hooks/useCookTimer'
import { X } from 'phosphor-react'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputTimer } from '../../components/InputTimer'
import { SelectedFoodEmoji } from '../../components/SelectedFoodEmoji'
import { getFormattedSeconds } from '../../utils/getFormattedSeconds'
import { TimerValidationSchema } from './schemas'
import * as S from './styles'
import { AddPlayerPopoverProps, NewTimerFormData } from './types'

export function AddPlayerPopover ({
  children,
  mode = 'add',
  isOpen,
  togglePopover
}: AddPlayerPopoverProps
) {
  const { timer } = useCardTimer()
  const newTimer = useForm<NewTimerFormData>({
    resolver: zodResolver(TimerValidationSchema),
    defaultValues: {
      icon: 'pan',
      title: '',
      timerHour: 0,
      timerMinutes: 0
    }
  })

  useEffect(() => {
    if (mode === 'edit') {
      setInitializeValues()
    }
  }, [])

  const { createCookTimer, updatePlayTimer, togglePlayTimer } = useCookTimer()
  const { reset, handleSubmit, setValue, formState: { errors } } = newTimer

  const handleSubmitTimer = (data: NewTimerFormData) => {
    const { icon, timerHour, timerMinutes, title } = data
    const timerConversionInSeconds = ((timerHour * 60) * 60) + (timerMinutes * 60)

    if (mode === 'edit' && timer) {
      updatePlayTimer({
        icon,
        timer: timerConversionInSeconds,
        title,
        uuid: timer.uuid,
        status: timer.status
      })
      togglePopover()
      togglePlayTimer(timer.uuid)

      return
    }

    createCookTimer(data)
    reset()
    togglePopover()
  }

  const setInitializeValues = useCallback(() => {
    if (!timer) {
      return
    }

    const { hour, minutes } = getFormattedSeconds(timer.timer)
    const { icon, title } = timer

    setValue('icon', icon)
    setValue('title', title)
    setValue('timerHour', hour)
    setValue('timerMinutes', minutes)
  }, [timer])

  const handleClosePopover = () => {
    if (timer) {
      togglePlayTimer(timer.uuid)
    }
    togglePopover()
    setInitializeValues()
  }

  const handleToggleOpenPopover = () => {
    togglePopover()
  }

  const renderTitle = () => {
    if (mode === 'edit') {
      return 'Editar'
    }

    return 'O que vamos fazer hoje?'
  }

  return (
    <Popover.Root open={isOpen}>
      <Popover.Trigger
        className="PopoverTrigger"
        asChild
        onClick={handleToggleOpenPopover}
      >
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <S.Content
          sideOffset={110}
          align="center"
          side="right"
        >
          <S.Form onSubmit={handleSubmit(handleSubmitTimer)}>
            <FormProvider {...newTimer}>
              <S.Header>
                <h1>{renderTitle()}</h1>
                <Popover.Close
                  className="closeButton"
                  onClick={handleClosePopover}
                >
                  <X color="#444" size={16} weight="fill" />
                </Popover.Close>
              </S.Header>
              <main>
                <SelectedFoodEmoji
                  defaultSelected={timer?.icon}
                  registerName="icon"
                />
                <Input
                  placeholder="Digite o nome"
                  registerName="title"
                  hasError={!!errors.title}
                  label="Nome"
                  required
                />
              </main>
              <InputTimer label="Tempo de cozimento"/>
              <footer>
                <Popover.Close asChild>
                  <Button
                    type="submit"
                    layout='outline'
                    onClick={handleClosePopover}
                  >
                    Cancelar
                  </Button>
                </Popover.Close>
                <Button>
                  {mode === 'edit' ? 'Salvar alterações' : 'Começar'}
                </Button>
              </footer>
             </FormProvider>
          </S.Form>
          <Popover.Arrow className="arrow"/>
          <S.BorderBackgroundLeft />
        </S.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
