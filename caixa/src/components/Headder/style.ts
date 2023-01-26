import styled from "styled-components";

export const HeadderComponent = styled.header`
  background-color: #5ad6fc;
  color: white;
  height: 10vh;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 400%;

  button {
    position: absolute;
    left: 10px;

    background-color: white;
    color: #5ad6fc;
    border: 1px solid white;
    font-family: "Minimal";
    font-size: 50%;
    border-radius: 50px;
    width: 10%;
    transition: all 0.3s;

    :hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;

export const HeadderComponentSales = styled.header`
  background-color: #5ad6fc;
  color: white;
  height: 6vh;
  border-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 250%;

  position: absolute;
  left: 25%;
  width: 50%;

  button {
    position: absolute;
    left: 10px;

    background-color: white;
    color: #5ad6fc;
    border: 1px solid white;
    font-family: "Minimal";
    font-size: 50%;
    border-radius: 50px;
    width: 10%;
    transition: all 0.3s;

    :hover {
      cursor: pointer;
      transform: scale(0.9);
    }
  }
`;
