import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SalesComponent from "../../Components/SalesComponent";

const Sales = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.jwt) {
      navigate("/login");
    }
  });

  return <SalesComponent />;
};

export default Sales;
