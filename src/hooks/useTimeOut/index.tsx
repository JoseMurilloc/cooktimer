import { useState } from 'react'

import { Notifier } from 'utils/Notifier'

export const useTimeOut = () => {
  const [notifyInterval, setNotifyInterval] = useState<NodeJS.Timer>()

  const handleNotifier = async () => {
    try {
      await Notifier.init()
      await Notifier.playSound('http://localhost:3333/?file=microwave')
      // await Notifier.playSound('http://localhost:3000/api/audio')
      await Notifier.notify({
        title: 'Tempo do temporizador terminou',
        body: 'Desligue o fogo agora, o tempo estabelecido pelo temporizador já passou',
        icon: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f525.png'
      })
    } catch (err) {
      console.log({ err })
    }
  }

  const startVerifyTurnOff = () => {
    const notify = setInterval(handleNotifier, 1000 * 5)
    setNotifyInterval(notify)
  }
  const stopVerifyTurnOff = () => {
    clearInterval(notifyInterval)
  }

  return {
    startVerifyTurnOff,
    stopVerifyTurnOff,
    handleNotifier
  }
}
