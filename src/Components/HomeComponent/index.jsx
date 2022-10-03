import { useNavigate } from "react-router-dom";
import * as S from "./style";

const HomeComponent = () => {
  let navigate = useNavigate();
  return (
    <S.Container>
      <button id="01" type="button" onClick={() => navigate("/produtos")}>
        Produtos
      </button>
      <button id="02" type="button" onClick={() => navigate("/relatorio")}>
        Vendas
      </button>
    </S.Container>
  );
};

export default HomeComponent;
