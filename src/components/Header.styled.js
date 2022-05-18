import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
  padding: 40px 0;

  h1 {
    color: #fff;
  }
  &:hover {
    background: yellow;
  }
`;
