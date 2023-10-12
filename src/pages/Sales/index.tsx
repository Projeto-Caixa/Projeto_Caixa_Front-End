import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import products from "../../../products.json";
import { Product } from "../../types/interfaces";
import { BsDash } from "react-icons/bs";
import { BsPlus } from "react-icons/bs";
import { BsTrash } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { ProductsService } from "../../services/productService";
import { saleService } from "../../services/saleService";
import PrintProducts from "../../components/printProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HeadderCastem from "../../components/Headder";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

import absolut from "./Icons/absolute.png";
import agua from "./Icons/agua.png";
import alcatra from "./Icons/alcatra.png";
import brahma from "./Icons/brahma.png";
import energetico from "./Icons/energetico.png";
import espumante from "./Icons/espumante.png";
import frios from "./Icons/frios.png";
import mandioca from "./Icons/mandioca.png";
import padrao from "./Icons/padrao.png";
import refrigerante from "./Icons/refrigerante.png";
import stella from "./Icons/stella.png";
import tanqueray from "./Icons/tanqueray.png";
import jack from "./Icons/jack.png";
import { useNavigate } from "react-router-dom";

// declare module "*.jpg";
declare module "*.png";

// declare module "*.jpg" {
//   const path: string;
//   export default path;
// }

const Sales = () => {
  const [sales, setSales] = useState<any>([]);
  const [vendedor, setVendedor] = useState<any>("");
  const [products, setProducts] = useState<any>([]);
  const [total, setTotal] = useState<any>(0);
  const [thing, setThing] = useState<any>(0);
  const [viewThing, setViewThing] = useState<boolean>(false);
  const [refrash, setRefrash] = useState<any>([]);
  let input = document.getElementById("thing") as HTMLInputElement;

  let navigate = useNavigate();

  useEffect(() => {
    getVendedor();
  }, []);
  /// is logged

  useEffect(() => {
    isLogged();
  }, []);
  let isLogged = () => {
    let jwt = localStorage.getItem("jwt");
    if (!jwt) {
      navigate("/logar");
      toast("realize login novamente", {
        icon: "🔄",
      });
    }
  };
  ///

  let handleAddProduct = (e: any) => {
    setTotal(total + e.price);

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
    // console.log(sales);
  };

  function handleRemoveProduct(e: any) {
    let verifica = sales.filter((element: any) => element.name == e.name);
    if (verifica.length != 0) {
      let position = sales.findIndex((index: any) => index.name == e.name);
      let newListProducts = sales;

      if (newListProducts[position].quantity > 0) {
        newListProducts[position].quantity--;
        setTotal(total - e.price);
      }
      if (newListProducts[position].quantity === 0) {
        newListProducts.splice(position, 1);
        setSales([...newListProducts]);
      }
      setSales([...newListProducts]);
    }
  }

  const getVendedor = () => {
    let vendedor = localStorage.getItem("user");
    setVendedor(vendedor);
  };
  const spinId: any = useRef();
  const closedId: any = useRef();

  let handleSaleProducts = async () => {
    spinId.current.style.display = "flex";
    closedId.current.style.display = "none";

    if (sales.length >= 1) {
      let data = {
        idVendedor: vendedor,
        list: sales,
      };

      const response = await saleService.Post(data);
      if (response) {
        spinId.current.style.display = "none";
        closedId.current.style.display = "block";
        window.print();
        setSales([]);
        setTotal(0);
        setRefrash([""]);
        setThing(0);
        input.value = "";
      }
    } else {
      toast.error("Nenhum produto foi selecionado!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      spinId.current.style.display = "none";
      closedId.current.style.display = "block";
    }
  };

  function handleViewThing() {
    if (viewThing) {
      setViewThing(false);
    } else setViewThing(true);
  }

  let handleTrashSales = () => {
    setSales([]);
    setTotal(0);
    setRefrash([""]);
    setThing(0);
    input.value = "";
  };

  const handleGetThing = (e: any) => {
    setThing(e.target.value - total);
  };

  const handleGetProducts = async () => {
    const response = await ProductsService.Get();
    setProducts(response!.data);
  };

  const handleGetIcon = (name: any) => {
    switch (name) {
      case "Absolut":
        return absolut;

      case "Agua":
        return agua;

      case "Alcatra":
        return alcatra;

      case "Brahma":
        return brahma;

      case "Energetico":
        return energetico;

      case "Espumante":
        return espumante;

      case "Frios":
        return frios;

      case "Jack":
        return jack;

      case "Mandioca":
        return mandioca;

      case "Refrigerante":
        return refrigerante;

      case "Stella":
        return stella;

      case "Tanqueray":
        return tanqueray;

      default:
        return padrao;
    }
  };

  useEffect(() => {
    handleGetProducts();
  }, [refrash]);

  return (
    <>
      <S.Page>
        <HeadderCastem props="sales" id="noPrint" />
        <S.ContainerListProducts id="noPrint">
          {products.map((e: any, index: any) => {
            return (
              <S.CardProduct key={index}>
                <figure>
                  <img src={e.image} />
                </figure>
                <S.InfosProduct>{e.title}</S.InfosProduct>
                <S.InfosProduct id="price">R${e.price}</S.InfosProduct>
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
                      <div ref={spinId}>
                        <span>R$</span>
                        {e.quantity * e.price}
                      </div>
                    );
                  })}
                </S.LineTotal>
              </S.CartProductContainer>
              <S.TotalCart>Total: R$ {total.toFixed(2)}</S.TotalCart>
            </S.Cart>
            {viewThing && (
              <S.Thing>
                <S.InputValue>
                  <label>
                    Valor recebido:
                    <br />
                    <input type="number" id="thing" onChange={handleGetThing} />
                  </label>
                </S.InputValue>
                <S.OutputValue>Troco: R${thing.toFixed(2)}</S.OutputValue>
              </S.Thing>
            )}
            <S.ButtonSell>
              <S.CloseSell ref={closedId} onClick={handleSaleProducts}>
                Finalizar venda
              </S.CloseSell>
              <S.Spin ref={spinId}>
                <CircularProgress />
              </S.Spin>
              <S.ButtonThing onClick={() => handleViewThing()}>
                <BsCoin />
              </S.ButtonThing>
              <S.ClearCart onClick={() => handleTrashSales()}>
                <BsTrash />
              </S.ClearCart>
            </S.ButtonSell>
          </S.CartContent>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover={false}
            theme="colored"
          />
        </S.ContinerInfoSales>
      </S.Page>
      <PrintProducts id="print" data={sales} />
    </>
  );
};

export default Sales;