import React from "react";
import HeadderCastem from "../../components/Headder";
import products from "../../../products.json";
import * as S from "./style";
import PrintLog from "../../components/printLog";

const Log = () => {
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
            {products.map((e) => {
              return (
                <S.LineProductInfo>
                  <div id="one">{e.title}</div>
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
