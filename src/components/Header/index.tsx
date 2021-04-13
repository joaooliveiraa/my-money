import logoImg from "../../assests/logo.svg";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="my money" />
        <button>Nova Transação</button>
      </Content>
    </Container>
  );
}
