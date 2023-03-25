import { useSound } from 'use-sound'
import type { PlayFunction, ReturnedValue } from 'use-sound/dist/types'

export function useClick (): ReturnedValue | [() => void, null] {
  const result = useSound('/media/microwave.mp3', {
    volume: 1
  })

  return result
}

export function useTurnOffSound (): { play: PlayFunction } {
  const [play] = useSound('/media/turnOff.mp3', {
    volume: 1
  })

  return { play }
}
