import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReportService } from "../../Services/reportService";
import { UserService } from "../../Services/userService";
import { ProductCard } from "../SalesComponent/style";
import * as S from "./style";

const ReportGlobal = () => {
  const [listSales, setListSales] = useState();
  const [vendidos, setVendidos] = useState();
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const renderLog = async () => {
    const response = await ReportService.Get();
    setListSales(response.data);
    // console.log(listSales);
  };
  const renderUser = async () => {
    let id = localStorage.getItem("IdUser");
    // console.log("id", id);
    const response = await UserService.Get(id);
    console.log("res", response);
    // console.log(listSales);
  };

  let listaVendidos = [];
  let totalList = [];

  useEffect(() => {
    renderLog();
    // renderUser();

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
          <div id="Value">Valor</div>
        </S.Infos>
        <S.Products>
          {vendidos
            ? vendidos.map((element, index) => {
                // let soma = element.price * element.quantity;
                // setTotal(element.price);

                if (element.nameabv) {
                  let soma = element.price * element.quantity;
                  totalList = +totalList + +soma;

                  console.log("totalList");
                  return (
                    <div key={index} className="products">
                      <S.ProductsContainer>
                        <span>{element.nameabv}</span>
                        <span id="number">{element.quantity}</span>
                        <span id="totalPrice">
                          R${element.price * element.quantity}
                        </span>
                      </S.ProductsContainer>
                    </div>
                  );
                }
              })
            : console.log("f")}
        </S.Products>
        <S.Dice>
          <S.Total>TOTAL: R${totalList}</S.Total>
          <div>Emitente: Mauricio</div>
          <h1>Ass:</h1>
          <span>
            <span>Barraquinhas</span>
            <span>05/10/2022</span>
          </span>
        </S.Dice>
      </S.Container>
      <div id="buttons">
        <button className="hiden-button" type="button" onClick={() => talvez()}>
          Gerar Relatorio
        </button>
        <button
          className="hiden-button"
          type="button"
          onClick={() => window.print()}
        >
          Imprimir
        </button>
        <button
          className="hiden-button"
          type="button"
          onClick={() => navigate("/relatorio")}
        >
          Voltar
        </button>
      </div>
    </S.Div>
  );
};

export default ReportGlobal;
