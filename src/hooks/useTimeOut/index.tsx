import { useState } from 'react'

import { Notifier } from 'utils/Notifier'

export const useTimeOut = () => {
  const [notifyInterval, setNotifyInterval] = useState<NodeJS.Timer>()

  const handleNotifier = async () => {
    try {
      await Notifier.init()
      await Notifier.playSound('https://www.w3schools.com/tags/horse.mp3')
      await Notifier.notify({
        title: 'Desligar o fogo',
        body: 'Desligue o alimento que está no fogo por favor.',
        icon: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f525.png'
      })
    } catch (err) {
      console.log({ err })
    }
  }

  const startVerifyTurnOff = () => {
    console.log('start ')

    const notify = setInterval(handleNotifier, 1000 * 60)
    setNotifyInterval(notify)
  }
  const stopVerifyTurnOff = () => {
    console.log('stop', notifyInterval)

    clearInterval(notifyInterval)
  }

  return {
    startVerifyTurnOff,
    stopVerifyTurnOff,
    handleNotifier
  }
}
