import React from "react";
import * as S from "./style";
import products from "../../../products.json";

const PrintProducts = (data: any) => {
  console.log(data.data);
  return (
    <>
      {data.data.length
        ? data.data.map((e: any) => {
            return (
              <S.PrintCOmponent id="print">
                <S.ProdInfo>
                  <div>Festa no Lontrão</div>
                  <div>
                    <img src={e.icon} />
                  </div>
                  <div>Vale 1 - {e.name}</div>
                </S.ProdInfo>
                <S.ValueProd>R$ {e.price}.00</S.ValueProd>
                <S.InfoAll>
                  <div>
                    <span>25/01/2023</span>
                    <span>Imbituva-Pr</span>
                  </div>
                  <div>Comunidade do lontrão</div>
                </S.InfoAll>
              </S.PrintCOmponent>
            );
          })
        : ""}
    </>
  );
};

export default PrintProducts;
