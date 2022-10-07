import React, { useEffect, useState } from "react";
import { ReportService } from "../../Services/reportService";
import * as S from "./style";

const ReportGlobal = () => {
  const [listSales, setListSales] = useState();

  const renderLog = async () => {
    const response = await ReportService.Get();
    setListSales(response.data);
    // console.log(listSales);
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
        {listSales
          ? listSales.map((element, index) => {
              let disconvert = JSON.parse(element.list);

              // console.log(index, "☮🕳🕳☮✝✝☪☪🕉🕉♈🛐🛐", disconvert);

              return disconvert.map((index) => {
                // console.log("qqqqqqqqqqqqqqqqqqqq");
                // console.log(index.name);

                return (
                  <div key={index} className="products">
                    <S.ProductsContainer>
                      <span>{index.name}</span>
                      <span>{index.quantity}</span>
                      <span>{index.price * index.quantity}</span>
                    </S.ProductsContainer>
                  </div>
                );
              });
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
  );
};

export default ReportGlobal;
