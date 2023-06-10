import React from 'react'

import { MOCKED_TIMER } from '__mocks__/timerMock'
import { render, screen } from '@testing-library/react'
import { PlayButton } from 'components/PlayButton'
import * as useCardTimer from 'contexts/CardTimerContext'

const useCardTimerSpy = jest.spyOn(useCardTimer, 'useCardTimer')

describe('<PlayButton />', () => {
  it('should be render player button correctly', () => {
    useCardTimerSpy.mockReturnValue(({ timer: MOCKED_TIMER }))

    render(<PlayButton isTimerEnd={false} />)

    expect(screen.getByTestId('icon-run')).toBeInTheDocument()
  })

  it('should be render correctly when button turn off', () => {
    render(<PlayButton isTimerEnd />)

    expect(screen.getByText('Desligar')).toBeInTheDocument()
  })

  it('should be render icon paused when status of timer is paused', () => {
    useCardTimerSpy.mockReturnValueOnce(({
      timer: { ...MOCKED_TIMER, status: 'paused' }
    }))

    render(<PlayButton isTimerEnd={false} />)

    expect(screen.getByTestId('icon-paused')).toBeInTheDocument()
  })
})
