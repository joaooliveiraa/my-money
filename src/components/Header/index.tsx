import logoImg from "../../assests/logo.svg";
import { Container, Content } from "./styles";

interface HeaderPros {
  openNewTransactionModal: () =>void;
};

export function Header({ openNewTransactionModal }: HeaderPros) {
  
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="my money" />
        <button type="button" onClick={openNewTransactionModal}>
             Nova Transação
        </button>
      </Content>
    </Container>
  );
}
