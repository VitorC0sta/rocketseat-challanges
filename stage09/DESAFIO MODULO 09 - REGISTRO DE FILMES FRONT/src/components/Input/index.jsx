import { Container } from "./styles"

export function Input({icon: Icon, text, id, ...rest}) {
  return(
    <Container>

      {Icon&&<Icon size={20}/>}
      <label htmlFor= {id} className="sr-only"> { text } </label>
      <input id={id} placeholder={text} {...rest} />

    </Container>
  );
}

