import { Container, Profile, Brand } from "./styles";
import { FiType } from "react-icons/fi";
import { Input } from "../Input/";

export function Header() {
  return(
  <Container>
    <Brand>
      Vitão Movies 
    </Brand>
    <Input id="title-search" text="Pesquisar por título" icon={FiType}/>
    <Profile>
      <div>
        <p>Usuário</p>
        <a href="#">sair</a>
      </div>
      <img src="https://github.com/VitorC0sta.png" alt="imagem do usuário" />
    </Profile>
  </Container>)
}

