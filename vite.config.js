/// <reference types="vite/client" />

import { defaultConfig } from '@vitejs/plugin-react'
import react from 'vite'

export default defaultConfig({
  plugins: [react()]
})
