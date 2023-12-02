import React from "react";
import * as S from "./style";
import products from "../../../products.json";
import baile from "./baile.png";
import icon from "./icon.png";

const PrintProducts = (data: any) => {
  let data2 = new Date();
  let dia = String(data2.getDate()).padStart(2, "0");
  let mes = String(data2.getMonth() + 1).padStart(2, "0");
  let ano = data2.getFullYear();
  let dataAtual = dia + "/" + mes + "/" + ano;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
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
                        <div>Baile</div>
                        <br />
                        <div>
                          <img src={icon} />
                        </div>
                        <div>Vale 1 - {e.name}</div>
                      </S.ProdInfo>
                      <S.ValueProd>R$ {e.price}.00</S.ValueProd>
                      <S.InfoAll>
                        <div>
                          <span>{today.toLocaleDateString()}</span>
                          <span>Imbituva-Pr</span>
                        </div>
                        {/* <div>Baile</div> */}
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
                      <div>Baile</div>
                      <br />
                      <div>
                        <img src={icon} />
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
                        <span>{today.toLocaleDateString()}</span>
                        <span>Imbituva-Pr</span>
                      </div>
                      {/* <div>Baile</div> */}
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
