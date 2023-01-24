import styled from "styled-components";

export const Page = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;

  display: flex;
`;

export const ContainerListProducts = styled.div`
  /* border: 1px solid red; */
  width: 70%;

  display: flex;
  padding: 10px;

  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;

export const CardProduct = styled.div`
  background-color: rgb(245, 245, 255);
  border-radius: 20px;

  width: 20%;
  height: 33%;

  margin: 10px;

  figure {
    margin: 0;
    height: 40%;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
  }
  img {
    height: 100%;
  }
`;

export const InfosProduct = styled.div`
  font-size: 200%;
  text-align: center;
  margin-bottom: 10px;
`;

export const LineButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15%;
`;

export const ButtonAdd = styled.button`
  background-color: rgb(245, 245, 255);
  border: 1px solid green;
  border-radius: 20px;
  width: 30%;
  height: 100%;
  color: green;

  transition: all 0.3s;

  :hover {
    border: 1px solid green;
    background-color: green;
    color: white;
    cursor: pointer;
  }
`;

export const Counter = styled.span`
  margin: 5px;
  font-size: 150%;
`;

export const ButtonRemove = styled.button`
  background-color: rgb(245, 245, 255);
  border: 1px solid red;
  border-radius: 20px;
  width: 30%;
  height: 100%;
  color: red;

  transition: all 0.3s;

  :hover {
    cursor: pointer;
    border: 1px solid red;
    background-color: red;
    color: white;
  }
`;

export const ContinerInfoSales = styled.div`
  width: 30%;
  padding: 5px;
`;

export const CartContent = styled.div`
  width: 100%;
  height: 75%;
`;

export const TitleCart = styled.div`
  font-size: 150%;
  height: 5%;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;

export const TitleName = styled.div`
  width: 45%;
`;

export const TitleRs = styled.div`
  width: 20%;
`;

export const TitleQtde = styled.div`
  width: 15%;
`;

export const TitleTotal = styled.div`
  width: 20%;
`;

export const Cart = styled.div`
  background-color: rgb(245, 245, 255);
  border-radius: 15px;
  height: 85%;
  /* padding: 10px; */
`;

export const CartProductContainer = styled.div`
  font-size: 150%;
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

export const LineName = styled.div`
  height: 100%;
  width: 45%;
  /* text-align: center; */
  margin-left: 10px;
  margin-top: 10px;
`;

export const LineRs = styled.div`
  height: 100%;
  width: 20%;
  text-align: center;
  margin-top: 10px;
`;

export const LineQtde = styled.div`
  height: 100%;
  width: 15%;
  text-align: center;
  margin-top: 10px;
`;

export const LineTotal = styled.div`
  height: 100%;
  width: 20%;
  text-align: center;
  margin-top: 10px;
`;

export const ButtonSell = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-evenly;
`;

export const CloseSell = styled.button`
  font-family: "Minimal";
  font-size: 170%;
  height: 100%;
  width: 50%;
  background-color: rgb(245, 245, 255);
  border-radius: 50px;
  border: 1px solid green;
  color: green;
  margin-top: 5px;

  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background-color: green;
    color: white;
  }
`;

export const ClearCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Minimal";
  font-size: 170%;
  height: 100%;
  width: 20%;
  background-color: rgb(245, 245, 255);
  border-radius: 50px;
  border: 1px solid red;
  color: red;
  margin-top: 5px;

  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background-color: red;
    color: white;
  }
`;

export const BeforeSoldContent = styled.div``;
