type NotifyParams = {
  title: string
  body: string
  icon?: string
}

const Notifier = {
  async init () {
    const permission = await Notification.requestPermission()
    if (permission !== 'granted') {
      throw new Error('Permissão negada')
    }
  },
  async playSound (url: string) {
    const audio = new Audio(url)
    await audio.play()
  },
  async notify ({ title, body, icon }: NotifyParams) {
    const notification = new Notification(title, {
      body,
      icon
    })
    notification.addEventListener('click', function () {
      window.focus()
      notification.close()
    })
  }
}

export { Notifier }
