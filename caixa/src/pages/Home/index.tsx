import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import HeadderCastem from '../../components/Headder';
import * as S from './style';

const Home = () => {
  const navigate = useNavigate();

  /// is logged

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
      <HeadderCastem props="home" />
      <S.ButtonsLine>
        <button id="sale" onClick={() => navigate('/vender')}>
          vender
        </button>
        <button id="products" onClick={() => navigate('/produtos')}>
          produtos
        </button>
        <button id="log" onClick={() => navigate('/relatorio')}>
          relatorio
        </button>
      </S.ButtonsLine>
    </S.Page>
  );
};

export default Home;
