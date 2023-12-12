import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  gap: 0.9rem;
  
  border: none;
  background-color: transparent;
  color: ${({theme}) => theme.COLORS.PINK};

  align-items: center;
`;