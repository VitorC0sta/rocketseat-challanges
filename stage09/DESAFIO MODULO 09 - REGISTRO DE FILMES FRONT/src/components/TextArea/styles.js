import styled from "styled-components";

export const Container = styled.textarea`
  padding: 1.9rem 6.4rem  1.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_300};

  height: 27.4rem;

  border: none;
  border-radius: 1rem;

  outline: none;

  font-size: 1.8rem;

  resize: none;
  &::placeholder {
    font-size: 1.8rem;
  };
`;
