import { Container } from "./styles";
import { FiStar } from "react-icons/fi";
import { GoStarFill } from "react-icons/go";


function createStar(rate) {
  let counter=0, stars = [];
  
  if(rate < 0) rate=0;
  if(rate > 5) rate=5;

  for(let i=0; i<5; i++) {
    if(counter <= rate - 1) {
      stars.push(<GoStarFill key={i}/>);
      counter++;
    } else {
      stars.push(<FiStar key={i}/>);
    }
  } 
  return stars
}

export function StarRating({rate, ...rest}) {
  return(
    <Container>
      { createStar(rate) }
    </Container>
  );
}