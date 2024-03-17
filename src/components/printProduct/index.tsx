import React from "react";
import * as S from "./style";
import products from "../../../products.json";
// import Festa em louvor a São José  from "./Festa em louvor a São José .png";

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
                        <div>Festa em louvor a São José </div>
                        <br />
                        <div>
                          <img
                            src={
                              "https://lh3.googleusercontent.com/proxy/X8-ZMyVWMRqdEPvmLPT6UfERKJ6slx-ZjgEoAWNa5ardaeu93m7Dyvgy10dR6fptNuVl3ioCkMy22zetJinpgqVX-8y-wtiFN_wkKdNA7KOrDn6LDz_POQM1mA"
                            }
                          />
                        </div>
                        <div>Vale 1 - {e.name}</div>
                      </S.ProdInfo>
                      <S.ValueProd>R$ {e.price}.00</S.ValueProd>
                      <S.InfoAll>
                        <div>
                          <span>{today.toLocaleDateString()}</span>
                          <span>Imbituva-Pr</span>
                        </div>
                        {/* <div>Festa em louvor a São José </div> */}
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
                      <div>Festa em louvor a São José </div>
                      <br />
                      <div>
                        <img
                          src={
                            "https://lh3.googleusercontent.com/proxy/X8-ZMyVWMRqdEPvmLPT6UfERKJ6slx-ZjgEoAWNa5ardaeu93m7Dyvgy10dR6fptNuVl3ioCkMy22zetJinpgqVX-8y-wtiFN_wkKdNA7KOrDn6LDz_POQM1mA"
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
                        <span>{today.toLocaleDateString()}</span>
                        <span>Imbituva-Pr</span>
                      </div>
                      {/* <div>Festa em louvor a São José </div> */}
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
