import React, { useState, useEffect } from "react";
import * as S from "./style";
import { saleService } from "../../services/saleService";
import swal from "sweetalert";
import { toast } from "react-toastify";

const PrintLog = (props: any) => {
  let convert = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  let data = new Date();
  let dia = String(data.getDate()).padStart(2, "0");
  let mes = String(data.getMonth() + 1).padStart(2, "0");
  let ano = data.getFullYear();
  let dataAtual = dia + "/" + mes + "/" + ano;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  let totalList: any = [];
  let vendidos = props.data;

  return (
    <S.PrintContainer id="print">
      Relatório
      <S.Log>
        <S.TitleInfos>
          <div id="one">Produto</div>
          <div id="two">R$</div>
          <div id="three">Qtde</div>
          <div id="four">Total</div>
        </S.TitleInfos>
        {vendidos && (
          <S.ProductsInfo>
            <div id="one">
              {vendidos.map((e: any, index: any) => {
                if (e.title) {
                  let soma = e.price * e.quantity;
                  totalList = +totalList + +soma;

                  return <div key={index}>{e.abv}</div>;
                }
              })}
            </div>
            <div id="two">
              {vendidos.map((e: any, index: any) => {
                if (e.title) {
                  return <div key={index}>{e.price}.00</div>;
                }
              })}
            </div>
            <div id="three">
              {vendidos.map((e: any, index: any) => {
                if (e.title) {
                  return <div key={index}>{e.quantity}</div>;
                }
              })}
            </div>
            <div id="four">
              {vendidos.map((e: any, index: any) => {
                if (e.title) {
                  return <div key={index}>R${e.price * e.quantity}.00</div>;
                }
              })}
            </div>
          </S.ProductsInfo>
        )}
      </S.Log>
      <S.Total>Total: R$ {convert.format(totalList)}</S.Total>
      <S.SecundaryInfos>
        <div>Festa de Santo Antônio</div>
        <div>{today.toLocaleDateString()}</div>
      </S.SecundaryInfos>
    </S.PrintContainer>
  );
};

export default PrintLog;
