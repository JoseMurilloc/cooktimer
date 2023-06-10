import React from 'react'

import { MOCKED_TIMER } from '__mocks__/timerMock'
import { render, screen } from '@testing-library/react'
import { CardTimer } from 'components/CardTimer'
import { CardTimerProps } from 'components/CardTimer/types'

const PROPS = {
  timer: MOCKED_TIMER,
  type: 'edit'
} satisfies CardTimerProps

describe('<CardTimer />', () => {
  it('should render component correctly', () => {
    render(<CardTimer {...PROPS}/>)

    expect(screen.getByTestId('icon-run')).toBeInTheDocument()
    expect(screen.getByText(PROPS.timer.title)).toBeInTheDocument()
    expect(screen.getByText('10:00')).toBeInTheDocument()
  })
})
