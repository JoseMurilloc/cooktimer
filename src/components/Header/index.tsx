import * as S from "./styles";
import { HeaderProps } from "./types";

const Header: React.FC = (props: HeaderProps) => {
  return <S.ContainerHeader>
    <h1>Header</h1>
  </S.ContainerHeader>;
}

export default Header;
