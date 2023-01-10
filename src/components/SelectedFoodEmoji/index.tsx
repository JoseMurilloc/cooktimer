import { useFormContext } from 'react-hook-form'

import * as SelectPrimitive from '@radix-ui/react-select'
import Image from 'next/image'
import { CaretDown } from 'phosphor-react'
import { getUrlByValueSelected } from 'utils/getUrlByValueSelected'

import { colors } from '../../stories/designSystems/colors'
import * as S from './styles'
import { SelectedFoodEmojiProps } from './types'

const OPTIONS = [
  {
    name: 'Bolo',
    value: 'cake'
  },
  {
    name: 'Frigideira',
    value: 'skillet'
  },
  {
    name: 'Panela pressão',
    value: 'pressureCooker'
  },
  {
    name: 'Panela',
    value: 'pan'
  }
]

export function SelectedFoodEmoji (
  { registerName }: SelectedFoodEmojiProps
) {
  const { register, setValue } = useFormContext()

  return (
    <SelectPrimitive.Root
      {...register(registerName)}
      onValueChange={(value) => { setValue(registerName, value) }}
      defaultValue="pan"
    >
      <S.Trigger>
        <SelectPrimitive.Value />
        <SelectPrimitive.Icon>
          <CaretDown
            color={colors.text_600}
            size={15}
            weight="fill"
          />
        </SelectPrimitive.Icon>
      </S.Trigger>
      <SelectPrimitive.Portal>
        <S.Content>
          <SelectPrimitive.Viewport>
            {OPTIONS.map(({ value }) => (
              <SelectPrimitive.Item key={value} value={value}>
                <SelectPrimitive.SelectItemText>
                  <Image
                    src={getUrlByValueSelected(value)}
                    width={25}
                    height={25}
                    alt="image"
                  />
                </SelectPrimitive.SelectItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </S.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
