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
  }
  return <S.HeadderComponent>Castem</S.HeadderComponent>;
};

export default HeadderCastem;
