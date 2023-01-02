import { Plus } from "phosphor-react";
import * as S from "./styles";
import { CardTimerProps } from "./types";

export function CardTimer (props: CardTimerProps) {
  return (
    <S.ContainerCardTimer>
      <S.PlayerButton>
        <div>
          <Plus size={22} weight="fill" color="#FFF9F2" />
        </div>
      </S.PlayerButton>
    </S.ContainerCardTimer>
  );
}

