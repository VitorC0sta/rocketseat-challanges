import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 6.4rem; 
  
  align-items: center;
  justify-content: space-between;
  padding: 2.4rem 12.3rem;

  border-bottom: solid 1px ${({ theme }) => theme.COLORS.GRAY_600};
  
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

`;

export const Brand = styled.h1`
  color: ${({theme}) => theme.COLORS.PINK};
  align-self: center;
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: flex;
  gap: 0.9rem;
  
  justify-content: center;
  align-items: center;
  
  img {
    height: 6.4rem;
    width: 6.4rem;
    border-radius: 50%;
  }

  > div {
    
    text-align: right;
    a {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;