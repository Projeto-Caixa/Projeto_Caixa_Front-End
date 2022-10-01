import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    font-family: "minimal";
    color: black
    /* min-height: 100vh; */
    width: 98vw;
    display: flex;
  `}
`;
export const Products = styled.div`
  /* border: 2px solid blue; */
  width: 70%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
`;
export const Infos = styled.div`
  ${({ theme }) => css`
    /* border: 2px solid ${theme.colors.primaryColor}; */
    background-color: #dcdcdc;
    border-radius: 10px;
    width: 30%;
    margin: 10px;
  `}
`;

export const ProductContainer = styled.div`
  ${({ theme }) => css`
    height: 35%;
    width: 16%;
    margin: 0px 10px;
    /* flex-direction: column; */
    /* border: 1px solid black; */
    background-color: #dcdcdc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  `}
`;

export const ProductCard = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid black; */
`;

export const ImageProduct = styled.img`
  height: 100px;
`;

export const InfoProduct = styled.div``;

export const TiTle = styled.h1`
  margin: 0;
`;

export const Price = styled.h1`
  font-size: 3vh;
  margin: 10px;
`;

export const LineButtons = styled.div`
  /* border: 2px solid black; */
  width: 150%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonAdd = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vw;
  height: 150%;
  font-size: 100%;
  background-color: #00a000;
  border-radius: 50px;
  border: 0;
  border: 1px solid #00a000;
  transition: all 0.5s;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const ButtonRemove = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4vw;
  height: 150%;
  font-size: 100%;
  background-color: red;
  border-radius: 50px;
  border: 0;
  border: 1px solid red;
  transition: all 0.5s;
  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

export const CardProductCart = styled.div`
  ${({ theme }) => css`
    border-bottom: 1px solid black;
    display: flex;
    justify-content: space-between;
    #0 {
      background-color: red;
    }
  `}
`;

export const NameProduct = styled.div``;
export const PriceProduct = styled.div``;
export const Amount = styled.div``;
