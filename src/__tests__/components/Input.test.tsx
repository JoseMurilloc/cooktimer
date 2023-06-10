import React, { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { fireEvent, render, screen } from '@testing-library/react'
import { Input } from 'components/Input'

const PROPS = {
  placeholder: 'Digite o nome',
  registerName: 'title',
  hasError: false,
  label: 'Nome',
  required: true
}

const Form = ({ children }: { children: ReactNode }) => {
  const formMethods = useForm()

  return (
    <FormProvider {...formMethods}>
      {children}
    </FormProvider>
  )
}

const renderWithHookFormProvider = (children: ReactNode) => {
  const renderedComponent = render(<Form>{children}</Form>)
  return renderedComponent
}

describe('<Input />', () => {
  it('should be render input correctly', () => {
    renderWithHookFormProvider(<Input {...PROPS}/>)

    expect(screen.getByPlaceholderText(PROPS.placeholder)).toBeInTheDocument()
  })

  it('should be change value on typing correctly', () => {
    renderWithHookFormProvider(<Input {...PROPS}/>)

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'

    fireEvent.change(input, { target: { value: text } })

    expect(input).toBeInTheDocument()
    expect(input.value).toBe(text)
  })
})
