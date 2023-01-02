import * as S from "./styles";
import { HeaderProps } from "./types";

export default function Header (props: HeaderProps) {
  return (
    <S.ContainerHeader>
      <div className="logo" />

      <S.ProfileHeader>
         <img src='https://i.ibb.co/fpcxPz4/Janet.png' />
         <span>User name</span>
      </S.ProfileHeader>
    </S.ContainerHeader>
  );
}

