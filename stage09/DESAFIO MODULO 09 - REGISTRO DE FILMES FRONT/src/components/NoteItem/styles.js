import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  background-color: ${({ theme, $isnew }) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_800 };

  padding: 1.6rem;

  border-radius: 1rem;

  border: ${({ theme, $isnew }) => $isnew ? `dashed 2px ${theme.COLORS.GRAY_300}` : "none" };

  > input {
    width: 100%;
    padding-left: 1.2rem;

    color: ${({ theme }) => theme.COLORS.WHITE };
    background: transparent;

    border: none;
    outline: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300 };
    }
  }

  > button {
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.PINK };
    margin-left: 0.5rem;

    svg {
      font-size: 2rem;
    }
  }
`;
