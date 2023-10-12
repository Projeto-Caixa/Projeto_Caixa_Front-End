import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import HeadderCastem from "../../components/Headder";
import * as S from "./style";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();
  let isAdmin = localStorage.getItem("isAdmin");

  /// is logged

  useEffect(() => {
    isLogged();
    verify();
  }, []);
  let isLogged = () => {
    let jwt = localStorage.getItem("jwt");
    if (!jwt) {
      navigate("/logar");
      toast("realize login novamente", {
        icon: "🔄",
      });
    }
  };

  let verify = () => {
    if (isAdmin === "true") {
      return (isAdmin = isAdmin);
    } else isAdmin = null;
  };
  ///

  return (
    <S.Page>
      <HeadderCastem props="home" />
      <S.ButtonsLine>
        <button id="sale" onClick={() => navigate("/vender")}>
          vender
        </button>
        {/* <button id="sale" onClick={() => navigate("/personal-log")}>
          pessoal
        </button> */}
        <button id="products" onClick={() => navigate("/produtos")}>
          produtos
        </button>
        {isAdmin === "true" ? (
          <button id="log" onClick={() => navigate("/relatorio")}>
            relatorio
          </button>
        ) : (
          ""
        )}
        <button id="log" onClick={() => navigate("/relatorio/byId")}>
          relatorioPessoal
        </button>
      </S.ButtonsLine>
    </S.Page>
  );
};

export default Home;
