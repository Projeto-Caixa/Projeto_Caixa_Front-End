import React, { useEffect, useState } from "react";
import HeadderCastem from "../../components/Headder";
import products from "../../../products.json";
import * as S from "./style";
import PrintLog from "../../components/printLog";
import { saleService } from "../../services/saleService";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import day1 from "./dia1.json";

const PersonalLogFixed = () => {
  const [data, setData] = useState<any>(day1);
  const [myLog, setmyLog] = useState<any>([]);
  const [total, setTotal] = useState<any>([]);
  const [separalog, setSeparaLog] = useState<any>([]);
  const [vendidos, setVendidos] = useState<any>([]);
  const [actived, setActived] = useState<any>(false);
  const [exibi, setExibi] = useState<any>(false);

  const [totalVendas, setTotalVendas] = useState<any>([]);

  let userName = localStorage.getItem("user");

  let listaVendidos: any = [];
  let totalList: any = [];

  const handleGetMyLog = () => {
    if (!actived) {
      // setActived(true);

      const minhaLog = data
        ? data.filter((log: any) => log.idVendedor == userName)
        : null;
      setmyLog(minhaLog);

      let teste: any = [];

      myLog.map((e: any) => {
        e.list.map((i: any) => {
          teste.push(e);
        });
      });
      setSeparaLog(teste);
      console.log("🚚", separalog);

      handleGetLogFormat();
    }
  };

  let handleGetLogFormat = () => {
    let variavel: any = [];
    separalog &&
      separalog.map((index: any) => {
        index.list.map((element: any) => {
          let filtro = listaVendidos.filter(
            (e: any) => e.title === element.title
          );
          if (!filtro.length) {
            listaVendidos.push(element);
          } else if (filtro.length != 0) {
            let position = listaVendidos.findIndex(
              (i: any) => i.title === element.title
            );

            let newListValue = listaVendidos;
            newListValue[position].quantity =
              newListValue[position].quantity + element.quantity;
            listaVendidos.push(newListValue);
          }
        });

        if (listaVendidos != undefined) {
          listaVendidos.map((element: any, index: number) => {
            if (element.length != undefined) {
              listaVendidos.splice(index, 1);
            }
          });

          variavel.push(listaVendidos);
          // setVendidos(listaVendidos);
          console.log("LISTA", listaVendidos);
          setTotalVendas([listaVendidos]);

          setExibi(true);
        } else vendidos;
      });

    setVendidos(variavel);
  };

  let convert = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const navigate = useNavigate();
  let isLogged = () => {
    let jwt = localStorage.getItem("jwt");
    if (!jwt) {
      navigate("/logar");
    }
  };
  // console.log(separalog);

  useEffect(() => {
    // isLogged();
    handleGetMyLog();
  }, []);

  return (
    <S.Page>
      <HeadderCastem props="log" />
      <S.Container id="noPrint">
        <S.CardLog>
          <S.LineInfo>
            <div id="one">Produto</div>
            <div id="two">R$</div>
            <div id="three">Qtde</div>
            <div id="four">Total</div>
          </S.LineInfo>
          <S.LogContent>
            {exibi
              ? vendidos[0]!.map((e: any) => {
                  if (e.title) {
                    let soma = e.price * e.quantity;
                    totalList = +totalList + +soma;

                    let totale = e.quantity * e.price;
                    return (
                      <S.LineProductInfo>
                        <div id="one">{e.name}</div>
                        <div id="two">{convert.format(e.price)}</div>
                        <div id="three">{e.quantity}</div>
                        <div id="four">{convert.format(totale)}</div>
                      </S.LineProductInfo>
                    );
                  }
                })
              : ""}
          </S.LogContent>
          <S.TotalLine>Total: {convert.format(totalList)}</S.TotalLine>
        </S.CardLog>
        <S.ButtonPrint>
          <button onClick={() => handleGetMyLog()}>Gerar</button>
          <button onClick={() => window.print()}>Imprimir</button>
        </S.ButtonPrint>
      </S.Container>
      <PrintLog data={vendidos} />
    </S.Page>
  );
};

export default PersonalLogFixed;
