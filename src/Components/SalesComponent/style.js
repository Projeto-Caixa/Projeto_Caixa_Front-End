import styled, { css, createGlobalStyle } from "styled-components";

// createGlobalStyle`
//   html {
//     height: 100%;
//     width: 100%;
//   }
// `;

export const Container = styled.main`
  ${({ theme }) => css`
  font-family: "minimal";
  color: black
  /* min-height: 100vh; */
  width: 98vw;
  display: flex;
  
  .print{
    display: none;
    /* height: 30%; */
    width: 100mm;
    /* margin: 0px 20px 20px 20px; */
    .loc{
      margin-top: 40px;
    }
    .container{
      border-radius: 10px;
      border: 1px solid black;
    }
    h1, h2{
      margin: 0;
      text-align: center;

    }

    .line1{
      display: flex;
      flex-direction: column;
      align-items: center;
      border-bottom: 1px solid black;
      img{
        height: 100px;
      }
    }
    .line2{
      border-bottom: 1px solid black;
      text-align: center;
      margin: 10px;
    }
    .line3{
      div{
        display: flex;
        justify-content: space-around;
      }
      h2{
        text-align: center;
        margin-top: 10px;
      }
    }
  }

  @media print {
    .Products, .Infos, .CloseSale{
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

export const Details = styled.div`
  width: 28%;
  height: 70%;
`;

export const Infos = styled.div`
  ${({ theme }) => css`
    /* border: 2px solid ${theme.colors.primaryColor}; */
    background-color: #dcdcdc;
    border-radius: 10px;
    width: 100%;
    height: 80vh;
    margin: 10px;
  `}
`;

export const CloseSale = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  justify-content: space-around;
  margin-left: 10px;
  font-size: 4vh;
`;

export const RemoveSale = styled.div`
  background-color: #00a000;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  transition: all 0.5s;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const Close = styled.div`
  background-color: red;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  border-radius: 30px;
  :hover {
    transform: scale(1.05);
    cursor: pointer;
  }
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
  #quant {
    font-size: 3vh;
    margin-top: 10px;
  }
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
    /* border-bottom: 1px solid black; */
    display: flex;
    justify-content: space-between;
    margin: 10px;
    background-color: white;
    border-radius: 10px;
    height: 30px;
    /* justify-content: center; */
    align-items: center;
    font-size: 4vh;
  `}
`;

export const NameProduct = styled.div``;
export const PriceProduct = styled.div`
  margin-right: 10px;
`;
export const Amount = styled.div`
  margin-left: 10px;
`;

export const PrintPage = styled.div`
  border: 1px solid black;
  border-radius: 30px;
  height: 100%;
  width: 8cm;
  display: none;
`;

export const TitleCart = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 4vh;
  margin: 10px;
`;

export const Break = styled.div`
  page-break-inside: always;
`;
