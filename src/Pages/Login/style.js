import styled, { css } from "styled-components";

export const LoginConstainer = styled.div`
  ${({ theme }) => css`
    @font-face {
      font-family: Minimal;
      src: url("../../styles/minimal.otf");
    }
    font-family: "Minimal";
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    /* overflow: hidden; */
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-direction: column;
    background-image: url({fundo});
  `}
`;
