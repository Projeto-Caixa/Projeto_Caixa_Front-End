import React, { useEffect, useState } from "react";
import { ReportService } from "../../Services/reportService";
import * as S from "./style";

const ReportGlobal = () => {
  const [list, setList] = useState([[]]);

  const renderLog = async () => {
    const response = await ReportService.Get();
    setList(response.data);
    console.log("demonho", list);
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
        {list.map((element) => {
          return (
            <div className="products">
              <S.ProductsContainer>
                <span>{element.idProduto}</span>
                <span>{element.quantidade}</span>
                <span>{element.preco * element.quantidade}</span>
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
