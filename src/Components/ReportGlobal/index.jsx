import React, { useEffect, useState } from "react";
import { ReportService } from "../../Services/reportService";
import { ProductCard } from "../SalesComponent/style";
import * as S from "./style";

const ReportGlobal = () => {
  const [listSales, setListSales] = useState();
  const [vendidos, setVendidos] = useState();
  const [newis, setnewis] = useState();

  const renderLog = async () => {
    const response = await ReportService.Get();
    setListSales(response.data);
    // console.log(listSales);
  };
  let listaVendidos = [];

  useEffect(() => {
    renderLog();

    // talvez();
  }, []);

  let talvez = () => {
    listSales.map((desgraca) => {
      let render = JSON.parse(desgraca.list);

      render.map((element) => {
        console.log(element.name, element.quantity);
        // listaVendidos.push(element);
        let filtro = listaVendidos.filter((r) => r.nameabv === element.nameabv);
        if (!filtro.length) {
          console.log("filtro e esse", filtro);
          listaVendidos.push(element);
        } else if (filtro.length != 0) {
          let position = listaVendidos.findIndex(
            (t) => t.nameabv === element.nameabv
          );

          let newListValue = listaVendidos;
          console.log("new list value", newListValue);
          newListValue[position].quantity =
            newListValue[position].quantity + element.quantity;
          listaVendidos.push(newListValue);
          console.log("🐲", listaVendidos);
          // let isso = newListValue[position].quantity + element.quantity;
          // console.log('lista vendidos', listaVendidos[position].quantity);
          // console.log('lista isso', isso);
          // console.log(element.quantity);

          //   newListValue[position].quantity + element.quantity;
          // listaVendidos = newListValue;
        }
        // console.log('esse e o teste', listaVendidos);
      });

      if (listaVendidos != undefined) {
        setVendidos(listaVendidos);
        // console.log(vendidos, 'state');
      } else console.log("f");
    });
  };

  return (
    <S.Div>
      <S.Container className="print" id="printable">
        <S.Title>
          RELATORIO
          <br /> GERAL
        </S.Title>
        <S.Infos>
          <div>Prod</div>
          <div>Quant</div>
          <div>Valor</div>
        </S.Infos>
        <S.Products>
          {vendidos
            ? vendidos.map((element, index) => {
                return (
                  <div key={index} className="products">
                    <S.ProductsContainer>
                      <span>{element.nameabv}</span>
                      <span>{element.quantity}</span>
                      <span>{element.price * element.quantity}</span>
                    </S.ProductsContainer>
                  </div>
                );
              })
            : console.log("f")}
        </S.Products>
        <S.Dice>
          <div>Emitente: Mauricio</div>
          <h1>Ass:</h1>
          <span>
            <span>Barraquinhas</span>
            <span>05/10/2022</span>
          </span>
        </S.Dice>
      </S.Container>

      <button className="hiden-button" type="button" onClick={() => talvez()}>
        Gerar Relatorio
      </button>
    </S.Div>
  );
};

export default ReportGlobal;
