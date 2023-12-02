import styled from "styled-components";

export const Page = styled.div`
  height: 90vh;

  #modalProduct {
    color: red;
  }
`;

export const ButtonAddProduct = styled.div`
  height: 10%;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    background-color: white;
    border: 1px solid #5ad6fc;
    border-radius: 50px;
    color: #5ad6fc;
    transition: all 0.3s;

    height: 90%;
    width: 20%;

    font-size: 200%;
    font-family: "Minimal";

    :hover {
      cursor: pointer;
      /* background-color: #5ad6fc;
      color: white; */
      transform: scale(0.9);
    }
  }
`;

export const ProductsContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;

  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: center;
`;

export const ContainerListProducts = styled.div`
  /* border: 1px solid red; */
`;

export const CardProduct = styled.div`
  padding: 5px;
  background-color: rgb(245, 245, 255);
  border-radius: 20px;

  width: 15%;
  height: 41%;

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

export const CardProductModal = styled.div`
  padding: 5px;
  background-color: rgb(245, 245, 255);
  border-radius: 20px;

  width: 15%;
  height: 50%;

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
  font-family: "Minimal";
  font-size: 150%;

  background-color: rgb(245, 245, 255);
  border: 0;
  border-radius: 20px;
  width: 30%;
  height: 100%;
  color: green;

  transition: all 0.5s;

  :hover {
    /* border: 1px solid green; */
    /* background-color: green;
      color: white; */
    transform: scale(1.2);
    cursor: pointer;
  }
`;

export const ButtonRemove = styled.button`
  background-color: rgb(245, 245, 255);
  border: 0;
  border-radius: 20px;
  width: 30%;
  height: 100%;
  color: red;

  transition: all 0.5s;

  :hover {
    cursor: pointer;
    /* border: 1px solid red; */
    /* background-color: red; */
    transform: scale(1.2);
    color: red;
  }
`;

export const ModalProduct = styled.div`
  width: 60vw;
  height: 50vh;
  border-radius: 5px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const FormAddProduct = styled.div`
  height: 90%;
  width: 70%;

  display: flex;
  align-items: center;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div {
    display: flex;
    flex-direction: column;
    margin: 10px;

    #columm01 {
      text-align: left;
      width: 100%;
    }
  }

  label {
    font-size: 170%;
    width: 100%;
    margin-top: 10px;

    border: 0;

    textarea:focus,
    input:focus,
    select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      border-bottom: 1px solid black;
    }
  }

  input {
    width: 100%;
    border: 0;
    border-bottom: 1px solid black;
    font-family: "Minimal";
    font-size: 90%;
  }
`;

export const ButtonAddProductModal = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;

  button {
    font-family: "Minimal";
    font-size: 220%;
    background-color: white;
    color: #5ad6fc;
    border: 1px solid #5ad6fc;
    transition: all 0.3s;
    width: 35%;
    border-radius: 50px;

    :hover {
      cursor: pointer;
      background-color: #5ad6fc;
      color: white;
    }
  }
`;

export const HeadderModal = styled.header`
  width: 100%;
  text-align: center;
  font-size: 300%;
  background-color: #5ad6fc;
  color: white;
`;
