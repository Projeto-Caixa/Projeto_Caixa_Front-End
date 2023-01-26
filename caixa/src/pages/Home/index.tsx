import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <button>Teste</button>
      <button onClick={() => navigate("/vender")}>vender</button>
      <button onClick={() => navigate("/produtos")}>produtos</button>
    </div>
  );
};

export default Home;
