import styled, {css} from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  
  > h2 {
    font-size: 3.6rem;
    font-weight: 500;
  }

  > main {
    max-width: 111.3rem;
    overflow-y: auto;
    
    text-align: justify;
    
    display: flex;
    flex-direction: column;
    
    margin: 4rem 12.3rem;
    
    gap: 2rem;
  }

`;

export const AutorBadge = styled.div`
  display: flex;
  align-items: center;

  gap: 0.8rem;

  font-size: 1.6rem;
  > img {
    width: 2rem;
    height: 2rem;
    
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_600 };
    border-radius: 50%;
  }
`;

export const CreatedAt = styled.div`
  display: flex;

  gap: 0.8rem;

  align-items: center;

  > svg {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`;