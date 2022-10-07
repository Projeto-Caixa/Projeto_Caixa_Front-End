import React, { useEffect, useState } from 'react';
import { ReportService } from '../../Services/reportService';
import * as S from './style';

const ReportGlobal = () => {
  const [listSales, setListSales] = useState();
  const [vendidos, setVendidos] = useState();

  const renderLog = async () => {
    const response = await ReportService.Get();
    setListSales(response.data);
    // console.log(listSales);
  };
  let listaVendidos = [];

  useEffect(() => {
    renderLog();

    // talvez();
  }, []);

  let talvez = () => {
    listSales.map((desgraca) => {
      let render = JSON.parse(desgraca.list);
      // console.log('esse e o render', render);
      render.map((element) => {
        console.log(element.name, element.quantity);
        listaVendidos.push(element);
        // setVendidos([...vendidos, element]);
        console.log('esse e o teste', listaVendidos);
      });
      if (listaVendidos != undefined) {
        setVendidos(listaVendidos);
        console.log(vendidos, 'state');
      } else console.log('f');
      // let filtra = teste.filter((e) => e.name == render.name);
      // if (!filtra.length) {
      //   // render.map((desgraca2) => {
      //   // setTeste(...teste, desgraca2);
      //   setTeste(...teste, render.name);
      //   // });
      // }
      // console.log('dasdas', teste);
      // setTeste(...teste, desgraca);
    });
  };

  return (
    <S.Div>
      <S.Container className="print" id="printable">
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
          {vendidos
            ? vendidos.map((element, index) => {
                return (
                  <div key={index} className="products">
                    <S.ProductsContainer>
                      <span>{element.nameabv}</span>
                      <span>{element.quantity}</span>
                      <span>{element.price * element.quantity}</span>
                    </S.ProductsContainer>
                  </div>
                );
              })
            : console.log('f')}
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

      <button className="hiden-button" type="button" onClick={() => talvez()}>
        Gerar Relatorio
      </button>
    </S.Div>
  );
};

export default ReportGlobal;
