import * as zod from 'zod'

export const TimerValidationSchema = zod.object({
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
