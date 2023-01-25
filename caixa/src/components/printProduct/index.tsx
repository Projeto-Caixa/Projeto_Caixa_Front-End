import React from "react";
import * as S from "./style";
import products from "../../../products.json";

const PrintProducts = () => {
  return products.map((e) => {
    return (
      <S.PrintCOmponent>
        <S.ProdInfo>
          <div>Festa no Lontrão</div>
          <div>
            <img src="https://i.pinimg.com/originals/29/f0/bd/29f0bd23ebbdfbbb0b3fc4d0849c2524.png" />
          </div>
          <div>Churrasco</div>
        </S.ProdInfo>
        <S.ValueProd>R$ 35.00</S.ValueProd>
        <S.InfoAll>
          <div>
            <span>25/01/2023</span>
            <span>Imbituva-Pr</span>
          </div>
          <div>Comunidade do lontrão</div>
        </S.InfoAll>
      </S.PrintCOmponent>
    );
  });
};

export default PrintProducts;
