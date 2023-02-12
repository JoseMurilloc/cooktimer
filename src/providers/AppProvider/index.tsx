import { CookTimerProvider } from 'hooks/useCookTimer'

import { IAppProviderProps } from './types'

export function AppProvider ({ children }: IAppProviderProps) {
  return (
    <CookTimerProvider>
      {children}
    </CookTimerProvider>
  )
}
