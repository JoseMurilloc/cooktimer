import { useRef } from 'react'
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
import * as S from './styles'
import { AddPlayerPopoverProps } from './types'

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

type NewTimerFormData = zod.infer<typeof NewTimerFormValidationSchema>

export function AddPlayerPopover ({ children }: AddPlayerPopoverProps) {
  const { createCookTimer } = useCookTimer()

  const newTimer = useForm<NewTimerFormData>({
    resolver: zodResolver(NewTimerFormValidationSchema),
    defaultValues: {
      icon: 'pan',
      title: '',
      timerHour: 0,
      timerMinutes: 0
    }
  })

  const { handleSubmit, formState: { errors } } = newTimer

  const onSubmit = (data: NewTimerFormData) => {
    createCookTimer(data)
  }

  return (
    <Popover.Root>
      <Popover.Trigger className="PopoverTrigger" asChild>
        {children}
      </Popover.Trigger>
      <Popover.Portal>
        <S.Content
          sideOffset={110}
          align="center"
          side="right"
        >
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <FormProvider {...newTimer}>
              <S.Header>
                <h1>Criar timer de cozinha</h1>
                <Popover.Close className="closeButton">
                  <X color="#444" size={16} weight="fill" />
                </Popover.Close>
              </S.Header>
              <main>
                <SelectedFoodEmoji registerName="icon"/>
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
                  <Button type="submit" layout='outline'>
                    Cancelar
                  </Button>
                  <Button>
                    Criar
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
