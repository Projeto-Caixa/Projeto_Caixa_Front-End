import * as S from "./style";
import React from "react";

const ReportPrint = () => {
  let list = [
    {
      name: "refrigerante",
      quant: 107,
      value: 5,
    },
    {
      name: "Pastel",
      quant: 389,
      value: 5,
    },
    {
      name: "Cerveja",
      quant: 356,
      value: 5,
    },
    {
      name: "Bolo",
      quant: 107,
      value: 312,
    },
    {
      name: "Sonho",
      quant: 78,
      value: 5,
    },
    {
      name: "Agua",
      quant: 34,
      value: 2,
    },
  ];

  return (
    <>
      <S.Container>
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
          {list.map((element) => {
            return (
              <div className="products">
                <S.ProductsContainer>
                  <span>{element.name}</span>
                  <span>{element.quant}</span>
                  <span>{element.value * element.quant}</span>
                </S.ProductsContainer>
              </div>
            );
          })}
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
      {/*  */}
      <S.Container>
        <S.Title>
          RELATORIO
          <br /> PESSOAL
        </S.Title>
        <S.Infos>
          <div>Prod</div>
          <div>Quant</div>
          <div>Valor</div>
        </S.Infos>
        <S.Products>
          {list.map((element) => {
            return (
              <div className="products">
                <S.ProductsContainer>
                  <span>{element.name}</span>
                  <span>{element.quant}</span>
                  <span>{element.value * element.quant}</span>
                </S.ProductsContainer>
              </div>
            );
          })}
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
    </>
  );
};

export default ReportPrint;
