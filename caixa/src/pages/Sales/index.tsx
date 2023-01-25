import React, { useEffect, useState } from "react";
import * as S from "./style";
import products from "../../../products.json";
import { Product } from "../../types/interfaces";
import { BsDash } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { ProductsService } from "../../services/productService";
import { saleService } from "../../services/saleService";

const Sales = () => {
  const [sales, setSales] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);
  const [teste, setTeste] = useState<any>(2);

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
    console.log(sales);
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

  let handleSaleProducts = async () => {
    let data = {
      idVendedor: "Festa de Comunidade",
      list: sales,
    };

    const response = await saleService.Post(data);
    if (response) {
      window.location.reload();
      // setSales([]);
    }
  };

  const handleGetProducts = async () => {
    const response = await ProductsService.Get();
    setProducts(response!.data);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  return (
    <>
      <S.Page>
        <S.ContainerListProducts id="noPrint">
          {products.map((e: any, index: any) => {
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
        <S.ContinerInfoSales id="noPrint">
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
              <S.CloseSell onClick={handleSaleProducts}>
                Finalizar venda
              </S.CloseSell>
              <S.ClearCart onClick={handleTrashSales}>
                <BsTrash />
              </S.ClearCart>
            </S.ButtonSell>
          </S.CartContent>
          {/* <S.BeforeSoldContent>ultimas vendas</S.BeforeSoldContent> */}
        </S.ContinerInfoSales>
        {/* <S.PrintPage id="print">
          {sales.map((item: any, index: any) => {
            if (item.quantity > 1) {
              for (let index = 1; index <= item.quantity; index++) {
                return <div>{item.name}</div>;
              }
            } else if (item.quantity === 0) {
              return <div>teste{item.name}</div>;
            }
          })}
        </S.PrintPage> */}
      </S.Page>
    </>
  );
};

export default Sales;
