import { useNavigate } from "react-router-dom";
import * as S from "./style";
import React from "react";

const ReportPrint = () => {
  const navigate = useNavigate();
  return (
    <>
      <button onClick={() => navigate("/geral")}>Geral</button>
      <button onClick={() => navigate("/personal")}>Pessoal</button>
    </>
  );
};

export default ReportPrint;
