import { Container } from "./styles";
import { Header } from "../../components/Header";
import { TextButton } from "../../components/TextButton";
import { FiArrowLeft, FiAlignCenter, FiThumbsUp} from "react-icons/fi";
import { Section } from "../../components/Section";
import { Row } from "../../components/Row"
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"

export function New() {
  return(
    <Container>
      <Header />
      <main>
        <TextButton icon={FiArrowLeft} text="Voltar" />
        <Section>
          <h2>Novo Filme</h2>
          <Row>
            <Input icon={FiAlignCenter} placeholder="Título"/>
            <Input icon={FiThumbsUp} placeholder="Sua nota (de 0 a 5)"/>
          </Row>
          <TextArea placeholder="Observações"/>
        </Section>
        <Section title="Marcadores">
          <div className="tags">
            <NoteItem value="Animação"/>
            <NoteItem $isnew placeholder="Novo Marcador"/>

          </div>
        </Section>
      </main>
    </Container>
  );
}