import React from "react";
import * as S from "./style";
import products from "../../../products.json";
import sales from "../../../sales.json";
import { Product } from "../../types/interfaces";
import { BsDash } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const Sales = () => {
  console.log(sales);
  return (
    <>
      <S.Page>
        <S.ContainerListProducts>
          {products.map((e, index) => {
            return (
              <S.CardProduct key={index}>
                <figure>
                  <img src={e.image} />
                </figure>
                <S.InfosProduct>{e.title}</S.InfosProduct>
                <S.InfosProduct>R${e.price}</S.InfosProduct>
                <S.LineButtons>
                  <S.ButtonAdd>
                    <BsPlus size={30} />
                  </S.ButtonAdd>
                  <S.Counter>{e.quantity}</S.Counter>
                  <S.ButtonRemove>
                    <BsDash size={30} />
                  </S.ButtonRemove>
                </S.LineButtons>
              </S.CardProduct>
            );
          })}
        </S.ContainerListProducts>
        <S.ContinerInfoSales>
          <S.CartContent>
            <S.TitleCart>
              <S.TitleName>Nome</S.TitleName>
              <S.TitleRs>R$</S.TitleRs>
              <S.TitleQtde>Qtde</S.TitleQtde>
              <S.TitleTotal>Total</S.TitleTotal>
            </S.TitleCart>
            <S.Cart>
              <S.CartProductContainer>
                <S.LineName>
                  {sales.map((e) => {
                    return <div>{e.title}</div>;
                  })}
                </S.LineName>
                <S.LineRs>
                  {sales.map((e) => {
                    return <div>{e.price}</div>;
                  })}
                </S.LineRs>
                <S.LineQtde>
                  {sales.map((e) => {
                    return <div>{e.quantity}</div>;
                  })}
                </S.LineQtde>
                <S.LineTotal>
                  {sales.map((e) => {
                    return <div>{e.quantity * e.price}</div>;
                  })}
                </S.LineTotal>
              </S.CartProductContainer>
            </S.Cart>
            <S.ButtonSell>
              <S.CloseSell>Finalizar venda</S.CloseSell>
              <S.ClearCart>
                <BsTrash />
              </S.ClearCart>
            </S.ButtonSell>
          </S.CartContent>
          <S.BeforeSoldContent>ultimas vendas</S.BeforeSoldContent>
        </S.ContinerInfoSales>
      </S.Page>
    </>
  );
};

export default Sales;
