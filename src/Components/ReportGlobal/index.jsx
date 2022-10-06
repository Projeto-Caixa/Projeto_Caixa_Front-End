import React, { useEffect, useState } from "react";
import { ReportService } from "../../Services/reportService";
import * as S from "./style";

const ReportGlobal = () => {
  const [list, setList] = useState([[]]);
  const [product, setProduct] = useState([{}]);

  const renderLog = async () => {
    const response = await ReportService.Get();
    setList([response.data]);
  };

  useEffect(() => {
    renderLog();
  }, []);

  return (
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
        {list[0].map((element, index) => {
          let disconvert = JSON.parse(element.list);
          return (
            <div key={index} className="products">
              <S.ProductsContainer>
                <span>{disconvert.name}</span>
                <span>{disconvert.quantity}</span>
                <span>{disconvert.price * disconvert.quantity}</span>
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
  );
};

export default ReportGlobal;
