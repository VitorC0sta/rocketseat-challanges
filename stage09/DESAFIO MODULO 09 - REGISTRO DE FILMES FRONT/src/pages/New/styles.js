import styled from "styled-components";

export const Container = styled.div`

  > main {
    display: flex;
    flex-direction: column;

    gap: 4rem;

    padding: 4rem 12.3rem;
    
    overflow-y: auto;

    .tags {
      display: flex;
      
      gap: 2.4rem;

      background: #000;
      
      border-radius: 1rem;
      padding: 1.6rem;
    }
  }

`;