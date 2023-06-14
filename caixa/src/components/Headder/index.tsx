import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { BiLogOut } from "react-icons/bi";
const HeadderCastem = (props: any) => {
  let handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
  };

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
        <span>
          <BiLogOut onClick={() => handleLogOut()} />
        </span>
      </S.HeadderComponentHome>
    );
  }
  return <S.HeadderComponent>Castem</S.HeadderComponent>;
};

export default HeadderCastem;
