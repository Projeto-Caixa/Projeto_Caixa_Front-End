import React from "react";
import * as S from "./style";
import products from "../../../products.json";
import baile from "./baile.png";

const PrintProducts = (data: any) => {
  // console.log(data.data);
  return (
    <>
      {data.data.length
        ? data.data.map((e: any, index: number) => {
            let data = [];
            if (e.quantity > 1) {
              for (let index = 1; index <= e.quantity; index++) {
                data.push(
                  <S.Full>
                    <S.PrintCOmponent key={index} id={`print`}>
                      <S.ProdInfo>
                        <div>Baile do Chopp</div>
                        <div>
                          <img src={baile} />
                        </div>
                        <div>Vale 1 - {e.name}</div>
                      </S.ProdInfo>
                      <S.ValueProd>R$ {e.price}.00</S.ValueProd>
                      <S.InfoAll>
                        <div>
                          <span>15/04/2023</span>
                          <span>Imbituva-Pr</span>
                        </div>
                        <div>Baile do Chopp</div>
                      </S.InfoAll>
                    </S.PrintCOmponent>
                  </S.Full>
                );
              }
            } else {
              data.push(
                <S.Full>
                  <S.PrintCOmponent id="print">
                    {/* <div id="testePrint"> */}
                    <S.ProdInfo>
                      <div>Baile do Chopp</div>
                      <div>
                        <img
                          src={
                            "https://lh3.google.com/u/0/d/1i4mbBkl2ZEg1AjW4G-RrOlF_-CfrP_02=w1151-h939-iv1"
                          }
                        />
                      </div>
                      <div>Vale 1 - {e.name}</div>
                    </S.ProdInfo>
                    <S.ValueProd>
                      {e.price.toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </S.ValueProd>
                    <S.InfoAll>
                      <div>
                        <span>15/04/2023</span>
                        <span>Imbituva-Pr</span>
                      </div>
                      <div>Baile do Chopp</div>
                    </S.InfoAll>
                    {/* </div> */}
                  </S.PrintCOmponent>
                </S.Full>
              );
            }
            return data;
          })
        : ""}
    </>
  );
};

export default PrintProducts;
