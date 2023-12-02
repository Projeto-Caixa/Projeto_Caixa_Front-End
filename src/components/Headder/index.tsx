import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";

const HeadderCastem = (props: any) => {
  const navigate = useNavigate();
  if (props.props == "products") {
    return (
      <S.HeadderComponent>
        <button onClick={() => navigate("/")}>Voltar</button> Castem - Produtos
      </S.HeadderComponent>
    );
  } else if (props.props == "sales") {
    return (
      <S.HeadderComponentSales id="headder">
        <button onClick={() => navigate("/")}>Voltar</button> Castem - Vendas
      </S.HeadderComponentSales>
    );
  } else if (props.props == "log") {
    return (
      <S.HeadderComponent id="noPrint">
        <button onClick={() => navigate("/")}>Voltar</button> Castem - Relatório
      </S.HeadderComponent>
    );
  } else if (props.props == "home") {
    return (
      <S.HeadderComponentHome id="headder">
        Castem - Home
      </S.HeadderComponentHome>
    );
  }
  return <S.HeadderComponent>Castem</S.HeadderComponent>;
};

export default HeadderCastem;
