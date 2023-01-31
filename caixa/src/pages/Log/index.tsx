import React, { useEffect, useState } from "react";
import HeadderCastem from "../../components/Headder";
import products from "../../../products.json";
import * as S from "./style";
import PrintLog from "../../components/printLog";
import { saleService } from "../../services/saleService";
import swal from "sweetalert";

const Log = () => {
  const [data, setData] = useState<any>();
  const [teste2, setTeste2] = useState<any>([]);

  let dataFormat: any = [];

  let teste: any;

  const handleGetLog = async () => {
    const response: any = await saleService.GetAll();
    if (!response) {
      swal({
        title: "Erro",
        text: "Error",
        icon: "error",
        timer: 6000,
      });
    } else setData(response.data);
  };

  const handleFormat = () => {
    // console.log(data);

    if (data) {
      data.map((e: any) => {
        if (e.list.length > 1) {
        } else {
          if (!dataFormat.length) {
            teste = e.list;
            dataFormat.push(...teste);
            setTeste2(dataFormat);
          } else {
            console.log(dataFormat.indexOf(e.name));
          }
        }
      });
    }
  };
  // console.log("🚃🛴🚋🚋🚃", teste2);

  useEffect(() => {
    handleGetLog();
    handleFormat();
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
            {data &&
              teste2.map((e: any) => {
                return (
                  <S.LineProductInfo>
                    <div id="one">{e.name}</div>
                    <div id="two">R${e.price}.00</div>
                    <div id="three">{e.quantity}</div>
                    <div id="four">R${e.quantity * e.price}.00</div>
                  </S.LineProductInfo>
                );
              })}
          </S.LogContent>
          <S.TotalLine>Total: R$11.438.00</S.TotalLine>
        </S.CardLog>
        <S.ButtonPrint>
          <button onClick={() => window.print()}>Imprimir</button>
        </S.ButtonPrint>
      </S.Container>
      <PrintLog />
    </S.Page>
  );
};

export default Log;
