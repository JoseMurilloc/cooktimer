import { CaretDown } from 'phosphor-react'
import { colors } from '../../stories/designSystems/colors'

import * as SelectPrimitive from '@radix-ui/react-select'
import * as S from './styles'
import Image from 'next/image'
import { useFormContext } from 'react-hook-form'
import { SelectedFoodEmojiProps } from './types'

const OPTIONS = [
  {
    contentURL: '/pudim.svg',
    name: 'Bolo',
    value: 'cake'
  },
  {
    contentURL: '/frigideira.svg',
    name: 'Frigideira',
    value: 'skillet'
  },
  {
    contentURL: '/panelaPressao.svg',
    name: 'Panela pressão',
    value: 'pressureCooker'
  },
  {
    contentURL: '/panela.svg',
    name: 'Panela',
    value: 'pan'
  },
]

export function SelectedFoodEmoji (
  { registerName }: SelectedFoodEmojiProps
) {
  const { register, setValue } = useFormContext()

  return (
    <SelectPrimitive.Root
      {...register(registerName)}
      onValueChange={(value) => setValue(registerName, value)}
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
            {OPTIONS.map(({value, contentURL}) => (
              <SelectPrimitive.Item key={value} value={value}>
                <SelectPrimitive.SelectItemText>
                  <Image
                    src={contentURL} 
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
  );
}
