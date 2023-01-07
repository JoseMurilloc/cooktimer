import { Button } from 'components/Button';
import { Plus, X } from 'phosphor-react';

import * as Popover from '@radix-ui/react-popover';
import * as S from './styles'
import { Input } from 'components/Input';
import { InputTimer } from 'components/InputTimer';
import { SelectedFoodEmoji } from 'components/SelectedFoodEmoji';

export function AddPlayerPopover () {
  return (
    <Popover.Root>
      <S.AddPlayerButton className="PopoverTrigger">
        <div className="content">
          <Plus size={22} weight="fill" color="#FFF9F2" />
        </div>
      </S.AddPlayerButton>
      <Popover.Portal>
        <S.Content 
          sideOffset={110} 
          align="center" 
          side="right"
        >
          <S.Header>
            <h1>Criar timer de cozinha</h1>
            <Popover.Close className="closeButton">
              <X color="#444" size={16} weight="fill" />
            </Popover.Close>
          </S.Header>
          <S.Form>
            <div className="inputBox">
              <SelectedFoodEmoji />
              <Input 
                label="Nome"
                placeholder="Digite o nome"
                hasError={false}
                required 
              />
            </div>
            <InputTimer label="label"/>
          </S.Form>
          <footer>
              <Button layout='outline'>
                Cancelar
              </Button>
              <Button>
                Criar
              </Button> 
          </footer>
         <Popover.Arrow className="arrow"/>
         <S.BorderBackgroundLeft />
        </S.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
