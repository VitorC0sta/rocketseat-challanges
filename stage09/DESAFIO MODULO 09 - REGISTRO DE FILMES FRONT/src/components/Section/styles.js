import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  
  gap: 4rem;

  > span {
    margin-bottom: 2rem;
    
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;