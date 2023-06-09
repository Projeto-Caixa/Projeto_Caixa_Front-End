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
            {separalog.map((e: any) => {
              return (
                <>
                  <h1>{e.name}</h1>
                </>
              );
            })}
          </S.LogContent>
          <S.TotalLine>Total: {'total'}</S.TotalLine>
        </S.CardLog>
        <S.ButtonPrint>
          <button
            onClick={() => {
              handleGetMyLog();
            }}
          >
            Gerar
          </button>
          <button onClick={() => window.print()}>Imprimir</button>
          <button
            onClick={() => {
              console.log(separalog);
            }}
          >
            teste
          </button>
        </S.ButtonPrint>
      </S.Container>
      <PrintLog data={vendidos} />
    </S.Page>
  );
};

export default PersonalLog;
