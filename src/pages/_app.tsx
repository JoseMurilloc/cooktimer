import type { AppProps } from 'next/app'
import { AppProvider } from 'providers/AppProvider'

import { globalStyles } from '../styles/global'

globalStyles()

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
