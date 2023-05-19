import { createContext, useContext } from 'react'

import { CardTimerContextData, CardTimerProviderProps } from './types'

const CardTimerContext = createContext({} as CardTimerContextData)

const CardTimerProvider = ({ children, timer }: CardTimerProviderProps) => {
  return (
    <CardTimerContext.Provider value={{ timer }}>
      {children}
    </CardTimerContext.Provider>
  )
}

const useCardTimer = () => {
  return useContext(CardTimerContext)
}

export { CardTimerProvider, useCardTimer }
