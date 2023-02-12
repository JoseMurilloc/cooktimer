import { useSound } from 'use-sound'
import type { ReturnedValue } from 'use-sound/dist/types'

export function useClick(): ReturnedValue | [() => void, null] {
  const result = useSound('/media/microwave.mp3', {
    volume: 1
  })

  return result
}