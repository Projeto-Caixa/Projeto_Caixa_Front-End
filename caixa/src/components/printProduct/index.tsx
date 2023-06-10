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
                        <div>Barraquinha de santo Antônio</div>
                        <div>
                          <img
                            src={
                              "https://www.adf.org.br/home/wp-content/uploads/2020/06/santo-antonio.png"
                            }
                          />
                        </div>
                        <div>Vale 1 - {e.name}</div>
                      </S.ProdInfo>
                      <S.ValueProd>R$ {e.price}.00</S.ValueProd>
                      <S.InfoAll>
                        <div>
                          <span>10/06/2023</span>
                          <span>Imbituva-Pr</span>
                        </div>
                        <div>Barraquinha de santo Antônio</div>
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
                      <div>Barraquinha de santo Antônio</div>
                      <div>
                        <img
                          src={
                            "https://www.adf.org.br/home/wp-content/uploads/2020/06/santo-antonio.png"
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
                        <span>09/06/2023</span>
                        <span>Imbituva-Pr</span>
                      </div>
                      <div>Barraquinha de santo Antônio</div>
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
