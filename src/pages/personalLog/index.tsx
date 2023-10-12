import React, { useEffect, useState } from 'react';
import HeadderCastem from '../../components/Headder';
import products from '../../../products.json';
import * as S from './style';
import PrintLog from '../../components/printLog';
import { saleService } from '../../services/saleService';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
const LogPessoal = () => {
  const [data, setData] = useState<any>();
  const [actived, setActived] = useState<any>(false);
  const [total, setTotal] = useState<any>([]);
  const [vendidos, setVendidos] = useState<any>();

  let teste: any;

  let user: string | null = localStorage.getItem('user');

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
  const handleGetByUser = async () => {
    const response = await saleService.GetAllByUser(user);
    if (!response) {
      swal({
        title: 'Erro',
        text: 'Error',
        icon: 'error',
        timer: 6000,
      });
    } else setData(response.data);
  };
  let listaVendidos: any = [];
  let totalList: any = [];

  let handleGetLogFormat = () => {
    console.log(data);
    data &&
      data.map((index: any) => {
        index.list.map((element: any) => {
          let filtro = listaVendidos.filter(
            (e: any) => e.title === element.title
          );
          if (!filtro.length) {
            listaVendidos.push(element);
          } else if (filtro.length != 0) {
            let position = listaVendidos.findIndex(
              (i: any) => i.title === element.title
            );

            let newListValue = listaVendidos;
            newListValue[position].quantity =
              newListValue[position].quantity + element.quantity;
            listaVendidos.push(newListValue);
          }
        });

        if (listaVendidos != undefined) {
          listaVendidos.map((element: any, index: number) => {
            if (element.length != undefined) {
              listaVendidos.splice(index, 1);
            }
          });
          setVendidos(listaVendidos);
        } else vendidos;
      });
  };

  const handleActivedLog = () => {
    if (!actived) {
      // setActived(true);
      handleGetLogFormat();
      handleGetByUser();
    }
  };

  let convert = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  let totalTeste: any = [];
  let soma = 0;

  useEffect(() => {
    //handleGetLog();
    // handleGetByUser();

    toast.promise(handleGetByUser(), {
      pending: 'Carregando vendas',
      success: 'Vendas carregados 👌',
      error: 'Erro ao carregar vendas 🤯',
    });
  }, []);

  /// is logged
  const navigate = useNavigate();
  useEffect(() => {
    isLogged();
  }, []);
  let isLogged = () => {
    let jwt = localStorage.getItem('jwt');
    if (!jwt) {
      navigate('/logar');
      toast('realize login novamente', {
        icon: '🔄',
      });
    }
  };
  ///

  return (
    <S.Page>
      <ToastContainer />
      <HeadderCastem props="logPerson" />
      <S.Container id="noPrint">
        <S.CardLog>
          <S.LineInfo>
            <div id="one">Produto</div>
            <div id="two">R$</div>
            <div id="three">Qtde</div>
            <div id="four">Total</div>
          </S.LineInfo>
          <S.LogContent>
            {vendidos &&
              vendidos!.map((e: any) => {
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
          <button onClick={() => handleActivedLog()}>Gerar</button>
          <button onClick={() => window.print()}>Imprimir</button>
        </S.ButtonPrint>
      </S.Container>
      <PrintLog data={vendidos} />
    </S.Page>
  );
};

export default LogPessoal;