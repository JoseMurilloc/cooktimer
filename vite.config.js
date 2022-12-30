/// <reference types="vite/client" />

import react from 'vite'
import { defaultConfig } from '@vitejs/plugin-react'

export default defaultConfig({
  plugins: [react()]
})