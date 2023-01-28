import { useCallback, useEffect, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'

import { zodResolver } from '@hookform/resolvers/zod'
import * as Popover from '@radix-ui/react-popover'
import { useCookTimer } from 'hooks/useCookTimer'
import { X } from 'phosphor-react'
import * as zod from 'zod'

import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputTimer } from '../../components/InputTimer'
import { SelectedFoodEmoji } from '../../components/SelectedFoodEmoji'
import { getFormattedSeconds } from '../../utils/getFormattedSeconds'
import * as S from './styles'
import { AddPlayerPopoverProps } from './types'

type NewTimerFormData = zod.infer<typeof NewTimerFormValidationSchema>

const NewTimerFormValidationSchema = zod.object({
  title: zod.string().min(1, 'Informe o que irá cozinhar'),
  icon: zod.string(),
  timerHour: zod
    .number()
    .max(24, 'Horas deve ser de no máximo 24 minutos.'),
  timerMinutes: zod
    .number()
    .max(60, 'Minutos deve ser de no máximo 60 minutos.')
}).superRefine((data, ctx) => {
  if (!data.timerHour && !data.timerMinutes) {
    ctx.addIssue({
      code: zod.ZodIssueCode.custom,
      path: ['timerMinutes'],
      message: 'Tempo de cozinha é necessário para se criar um timer'
    })
  }
})

export function AddPlayerPopover ({
  children,
  mode = 'add',
  timer
}: AddPlayerPopoverProps
) {
  const [isOpen, setIsOpen] = useState(false)
  const newTimer = useForm<NewTimerFormData>({
    resolver: zodResolver(NewTimerFormValidationSchema),
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
      setIsOpen(false)
      togglePlayTimer(timer.uuid)

      return
    }

    createCookTimer(data)
    reset()
    setIsOpen(false)
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
    setIsOpen(false)
  }

  const handleToggleOpenPopover = () => {
    setIsOpen(state => !state)
  }

  const renderTitle = () => {
    if (mode === 'edit') {
      return 'Editar'
    }

    return 'Criar timer de cozinha'
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
              <InputTimer label="label"/>
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
                  {mode === 'edit' ? 'Salvar alterações' : 'Criar'}
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
