import styled from "styled-components";

export const Page = styled.div`
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
  /* overflow: hidden; */
  overflow-x: hidden;
  display: flex;

  @media print {
    #noPrint,
    #headder {
      margin: 0;
      padding: 0;
      height: 0px;
      width: 0px;
      display: none;
    }
    /* #print {
      display: block;
      break-after: auto;
    } */
  }
`;

export const Print = styled.div``;

export const ContainerListProducts = styled.div`
  /* border: 1px solid red; */
  margin-top: 50px;
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

  #price {
    font-size: 140%;
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

  margin-top: 50px;
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
  height: 90%;

  span {
    font-size: 80%;
    margin-right: 5px;
  }
`;

export const TotalCart = styled.div`
  height: 10%;
  border-top: 1px solid black;
  margin: 0px 100px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 200%;
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

export const Thing = styled.div`
  background-color: rgb(245, 245, 255);

  margin-top: 10px;
  border-radius: 15px;

  padding: 5px;
  height: 25%;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

export const InputValue = styled.div`
  height: 60%;

  font-size: 170%;
  text-align: center;

  input {
    border: 0;
    border: 1px solid black;
    border-radius: 10px;
    background-color: rgb(245, 245, 255);

    font-family: "Minimal";
    font-size: 100%;
    width: 50%;
    text-align: center;
  }

  textarea:focus,
  input:focus,
  select:focus {
    box-shadow: 0 0 0 0;
    border: 0;
    outline: 0;
    border: 1px solid black;
  }
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const OutputValue = styled.div`
  height: 30%;

  font-size: 200%;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid black;
  /* border-radius: 50px; */
  width: 50%;
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
  background-color: white;
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
  background-color: white;
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

export const ButtonThing = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Minimal";
  font-size: 170%;
  height: 100%;
  width: 20%;
  background-color: white;
  border-radius: 50px;
  border: 1px solid #5ad6fc;
  color: #5ad6fc;
  margin-top: 5px;

  transition: all 0.3s;

  :hover {
    cursor: pointer;
    background-color: #5ad6fc;
    color: white;
  }
`;

export const PrintPage = styled.div`
  /* display: none; */
  /* font-size: 200px; */
  /* height: 100; */

  div {
    width: 80mm;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    font-size: 150%;
  }
`;

export const BeforeSoldContent = styled.div``;
