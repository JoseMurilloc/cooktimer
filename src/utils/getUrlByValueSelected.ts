type Url = { url: string, type: string }

export function getUrlByValueSelected (type: string) {
  const urls: Url[] = [
    {
      url: '/pudim.svg',
      type: 'cake'
    },
    {
      url: '/frigideira.svg',
      type: 'skillet'
    },
    {
      url: '/panelaPressao.svg',
      type: 'pressureCooker'
    },
    {
      url: '/panela.svg',
      type: 'pan'
    }
  ]

  const [urlByType] = urls.filter(url => url.type === type)

  if (!urlByType) {
    return ''
  }

  return urlByType.url
}
