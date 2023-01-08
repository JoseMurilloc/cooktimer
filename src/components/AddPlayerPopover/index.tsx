import * as Popover from '@radix-ui/react-popover'
import * as zod from 'zod'
import * as S from './styles'

import { Plus, X } from 'phosphor-react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputTimer } from '../../components/InputTimer'
import { SelectedFoodEmoji }  from '../../components/SelectedFoodEmoji'
import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'


const NewTimerFormValidationSchema = zod.object({
  title: zod.string().min(1, 'Informe o que irá cozinhar'),
  icon: zod.string(),
  timerHour: zod
    .number()
    .max(60, 'Minutos deve ser de no máximo 60 minutos.'),
  timerMinutes: zod
    .number()
    .max(24, 'Horas deve ser de no máximo 24 minutos.'),
}).superRefine((data, ctx) => {
  if (!data.timerHour && !data.timerMinutes) {
    ctx.addIssue({
      code: zod.ZodIssueCode.custom,
      path: ["timerMinutes"],
      message: "Tempo de cozinha é necessário para se criar um timer",
    });
  }
});

type NewTimerFormData = zod.infer<typeof NewTimerFormValidationSchema>


export function AddPlayerPopover () {
  const newTimer = useForm<NewTimerFormData>({
    resolver: zodResolver(NewTimerFormValidationSchema),
    defaultValues: {
      icon: 'pan',
      title: '',
      timerHour: 0,
      timerMinutes: 0,
    },
  })

  const { register, handleSubmit, watch, formState: { errors } } = newTimer

  const onSubmit = (data: any) => console.log(data)

  return (
    <Popover.Root>
      <S.AddPlayerButton className="PopoverTrigger">
        <div className="content">
          <Plus size={22} weight="fill" color="#FFF9F2" />
        </div>
      </S.AddPlayerButton>
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
  );
}
