import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
`;

export const ButtonsLine = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    height: 10%;
    width: 20%;
    margin: 20px;

    font-family: "Minimal";
    font-size: 250%;
    color: #5ad6fc;
    background-color: white;
    border: 1px solid #5ad6fc;
    border-radius: 50px;
    transition: all 0.3s;

    :hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
