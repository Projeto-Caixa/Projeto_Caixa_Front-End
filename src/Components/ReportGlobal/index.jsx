import React, { useEffect, useState } from "react";
import { ReportService } from "../../Services/reportService";
import * as S from "./style";

const ReportGlobal = () => {
  const [listSales, setListSales] = useState();
  const [teste, setTeste] = useState([]);

  const renderLog = async () => {
    const response = await ReportService.Get();
    setListSales(response.data);
    // console.log(listSales);
  };

  useEffect(() => {
    renderLog();
    // talvez();
  }, []);

  let talvez = () => {
    // listSales.map((desgraca) => {
    //   let render = JSON.parse(desgraca.list);
    //   let filtra = teste.filter((e) => e.name == render.name);
    //   if (!filtra.lenght) {
    //     if (render.length > 1) {
    //       render.map((desgraca2) => {
    //         setTeste(...teste, desgraca2);
    //       });
    //     }
    //     setTeste(...teste, desgraca);
    //   }
    // });
  };

  // talvez();

  return (
    <S.Container>
      <button type="button" onClick={() => talvez()}>
        poa
      </button>
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

              return disconvert.map((i, index) => {
                // console.log("qqqqqqqqqqqqqqqqqqqq");
                // console.log(index.name);

                return (
                  <div key={index} className="products">
                    <S.ProductsContainer>
                      <span>{i.name}</span>
                      <span>{i.quantity}</span>
                      <span>{i.price * i.quantity}</span>
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
