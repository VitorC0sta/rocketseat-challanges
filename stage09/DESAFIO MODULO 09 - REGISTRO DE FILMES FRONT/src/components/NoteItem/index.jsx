import { Container } from "./styles";
import { FiMinusSquare, FiPlusSquare } from "react-icons/fi";

export function NoteItem({$isnew, value, onCLick, ...rest}) {
  return(
    <Container $isnew={$isnew}>  
      <input type="text" value={value} readOnly={!$isnew} {...rest}/>
      
      <button type="button" onClick={onCLick} className={$isnew ? "button-add": "button-remove"} >
        {$isnew? <FiPlusSquare /> : <FiMinusSquare />}
      </button>
    </Container>
  )

}