import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin: 0;
  width: 68mm;
  border: 1px solid black;
  border-radius: 10px;
`;
export const Div = styled.div`
  @media print {
    .hiden-button {
      visibility: hidden;
    }

    .print {
      display: block;
    }
    #printable,
    #printable * {
      visibility: visible;
    }
    #printable {
      position: fixed;
      left: 15px;
      top: 0;
    }
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 30px;
  text-align: center;
  border-bottom: 1px solid black;
`;

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
  font-size: 20px;
  border-bottom: 1px solid black;
`;

export const Products = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly; */

  border-bottom: 1px solid black;
`;

export const ProductsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  font-size: 16px;

  span {
    width: 33%;
    text-align: center;
  }
`;

export const Dice = styled.div`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin: 10px 0px 10px 0px;

  h1 {
    font-size: 20px;
    margin: 15px 50px;
    text-align: left;
    border-bottom: 1px solid black;
  }

  span {
    display: flex;
    justify-content: space-around;
  }
`;
