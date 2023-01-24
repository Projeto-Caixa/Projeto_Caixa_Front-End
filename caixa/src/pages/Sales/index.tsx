import React, { useState } from "react";
import * as S from "./style";
import products from "../../../products.json";
import { Product } from "../../types/interfaces";
import { BsDash } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";

const Sales = () => {
  const [sales, setSales] = useState<any>([]);

  let handleAddProduct = (e: any) => {
    let verifica = sales.filter((element: any) => element.name == e.name);
    if (verifica.length === 0) {
      e.quantity = 1;
      setSales([...sales, e]);
    } else if (verifica.length != 0) {
      let position = sales.findIndex((index: any) => index.name == e.name);
      let newListProducts = sales;
      newListProducts[position].quantity++;
      setSales([...newListProducts]);
    }
  };

  function handleRemoveProduct(e: any) {
    let verifica = sales.filter((element: any) => element.name == e.name);
    if (verifica.length != 0) {
      let position = sales.findIndex((index: any) => index.name == e.name);
      let newListProducts = sales;

      if (newListProducts[position].quantity > 0) {
        newListProducts[position].quantity--;
      }
      if (newListProducts[position].quantity === 0) {
        newListProducts.splice(position, 1);
        setSales([...newListProducts]);
      }
      setSales([...newListProducts]);
    }
  }

  let handleTrashSales = () => {
    setSales([]);
    window.location.reload();
  };

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
                  <S.ButtonAdd onClick={() => handleAddProduct(e)}>
                    <BsPlus size={30} />
                  </S.ButtonAdd>
                  <S.Counter>{e.quantity ? `x${e.quantity}` : ""}</S.Counter>
                  <S.ButtonRemove onClick={() => handleRemoveProduct(e)}>
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
                  {sales.map((e: any, index: any) => {
                    return <div key={index}>{e.title}</div>;
                  })}
                </S.LineName>
                <S.LineRs>
                  {sales.map((e: any, index: any) => {
                    return (
                      <div key={index}>
                        <span>R$</span>
                        {e.price}
                      </div>
                    );
                  })}
                </S.LineRs>
                <S.LineQtde>
                  {sales.map((e: any, index: any) => {
                    return <div key={index}>{e.quantity}</div>;
                  })}
                </S.LineQtde>
                <S.LineTotal>
                  {sales.map((e: any, index: any) => {
                    return (
                      <div key={index}>
                        <span>R$</span>
                        {e.quantity * e.price}
                      </div>
                    );
                  })}
                </S.LineTotal>
              </S.CartProductContainer>
            </S.Cart>
            <S.ButtonSell>
              <S.CloseSell>Finalizar venda</S.CloseSell>
              <S.ClearCart onClick={handleTrashSales}>
                <BsTrash />
              </S.ClearCart>
            </S.ButtonSell>
          </S.CartContent>
          {/* <S.BeforeSoldContent>ultimas vendas</S.BeforeSoldContent> */}
        </S.ContinerInfoSales>
      </S.Page>
    </>
  );
};

export default Sales;
