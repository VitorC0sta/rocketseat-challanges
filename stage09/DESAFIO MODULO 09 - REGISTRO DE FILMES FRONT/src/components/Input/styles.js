import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  
  padding: 1.9rem 2.4rem;
  border-radius: 1rem;

  align-items: center;
  gap: 1rem;
  > input{
    background: transparent;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  };

  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300 };
  }
`;