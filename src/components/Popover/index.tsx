import * as Popover from '@radix-ui/react-popover';
import { CaretLeft, Plus, X } from 'phosphor-react';
import * as S from './styles'

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
         <main>
          <h2>Main</h2>
         </main>
         <footer>
          <h2>Footer</h2>
         </footer>
         <Popover.Arrow className="arrow"/>
         <S.BorderBackgroundLeft />
        </S.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
