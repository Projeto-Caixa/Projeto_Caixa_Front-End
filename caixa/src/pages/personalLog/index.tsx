import React, { useEffect, useState } from 'react';
import HeadderCastem from '../../components/Headder';
import products from '../../../products.json';
import * as S from './style';
import PrintLog from '../../components/printLog';
import { saleService } from '../../services/saleService';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const PersonalLog = () => {
  const [data, setData] = useState<any>();
  const [myLog, setmyLog] = useState<any>([]);
  const [total, setTotal] = useState<any>([]);
  const [separalog, setSeparaLog] = useState<any>([]);
  const [vendidos, setVendidos] = useState<any>();

  useEffect(() => {
    handleGetLog();
  }, []);

  const handleGetMyLog = () => {
    const minhaLog = data
      ? data.filter((log: any) => log.idVendedor == 'Honaru Dinyu')
      : null;
    setmyLog(minhaLog);
    console.log(myLog);

    let teste: any = [];

    myLog.map((e: any) => {
      e.list.map((i: any) => {
        console.log('💌', i);
        teste.push(i);
        // setSeparaLog([{ ...separalog, i }]);
      });
    });
    setSeparaLog(teste);
  };

  const handleGetLog = async () => {
    const response: any = await saleService.GetAll();
    if (!response) {
      swal({
        title: 'Erro',
        text: 'Error',
        icon: 'error',
        timer: 6000,
      });
    } else setData(response.data);
  };

  let convert = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  /// is logged
  const navigate = useNavigate();
  useEffect(() => {
    isLogged();
  }, []);
  let isLogged = () => {
    let jwt = localStorage.getItem('jwt');
    if (!jwt) {
      navigate('/testando');
    }
  };
  ///
  let totalList: any = [];
  return (
    <S.Page>
      <HeadderCastem props="log" />
      <S.Container id="noPrint">
        <S.CardLog>
          <S.LineInfo>
            <div id="one">Produto</div>
            <div id="two">R$</div>
            <div id="three">Qtde</div>
            <div id="four">Total</div>
          </S.LineInfo>
          <S.LogContent>
            {separalog &&
              separalog!.map((e: any) => {
                if (e.title) {
                  let soma = e.price * e.quantity;
                  totalList = +totalList + +soma;

                  let totale = e.quantity * e.price;
                  return (
                    <S.LineProductInfo>
                      <div id="one">{e.name}</div>
                      <div id="two">{convert.format(e.price)}</div>
                      <div id="three">{e.quantity}</div>
                      <div id="four">{convert.format(totale)}</div>
                    </S.LineProductInfo>
                  );
                }
              })}
          </S.LogContent>
          <S.TotalLine>Total: {convert.format(totalList)}</S.TotalLine>
        </S.CardLog>
        <S.ButtonPrint>
          <button onClick={() => handleGetMyLog()}>Gerar</button>
          <button onClick={() => window.print()}>Imprimir</button>
        </S.ButtonPrint>
      </S.Container>
      <PrintLog data={vendidos} />
    </S.Page>
  );
};

export default PersonalLog;
