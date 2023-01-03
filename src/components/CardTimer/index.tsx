import { AddPlayerPopover } from "components/Popover";
import { Pause, Pencil, Plus, X } from "phosphor-react";
import { colors as DesignSystemColors } from "../../stories/designSystems/colors";
import { CardTimerProps } from "./types";
import * as S from "./styles";

export function CardTimer ({
  type,
  timer
}: CardTimerProps) {

  if (type === 'add' && !timer) {
    return (
      <S.ContainerCardTimer screenMode={type}>
        <AddPlayerPopover />
      </S.ContainerCardTimer>
    );
  }
  
  return (
    <S.ContainerCardTimer screenMode={type}>
      <header>
        <S.TimerName>{timer?.title}</S.TimerName>
        <S.WrapperIcon>
          <img src="https://i.imgur.com/UFcoguD.png" alt="image" />
        </S.WrapperIcon>
      </header>
      <main>
        <S.Timer>36:43</S.Timer>
      </main>
      <footer>
        <S.WrapperIcon>
          <Pencil
            size="1.5rem" 
            color={DesignSystemColors.primary} 
          />            
        </S.WrapperIcon>
        <S.PlayerButton>
           <Pause 
            weight="fill"
            size="1.5rem" 
            color={DesignSystemColors.primary_000}       
           />
        </S.PlayerButton>
        <S.WrapperIcon>
          <X 
            size="1.5rem" 
            color={DesignSystemColors.primary} 
          />
        </S.WrapperIcon>
      </footer>
      <S.BackgroundBorder />
    </S.ContainerCardTimer>
  )
}

