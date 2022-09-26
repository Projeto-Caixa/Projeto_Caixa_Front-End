import styled, { css } from "styled-components";

export const Container = styled.main`
  ${({ theme }) => css`
    font-family: "minimal";
    color: ${theme.colors.primaryColor};
    /* min-height: 100vh; */
    width: 98vw;
    display: flex;
  `}
`;
export const Products = styled.div`
  /* border: 2px solid blue; */
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;
export const Infos = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primaryColor};
    width: 30%;
  `}
`;

export const ProductContainer = styled.div`
  ${({ theme }) => css`
    height: 35%;
    width: 16%;
    margin: 0px 10px;
    /* flex-direction: column; */
    border: 1px solid ${theme.colors.primaryColor};
    border-radius: 50px;
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

export const Price = styled.div``;

export const LineButtons = styled.div`
  /* border: 2px solid black; */
  width: 150%;
`;

export const ButtonAdd = styled.button`
  width: 50%;
  font-size: 100%;
  background-color: white;
  border: 0;
  border: 1px solid #00a000;
`;

export const ButtonRemove = styled.button`
  font-size: 100%;
  width: 50%;
`;
