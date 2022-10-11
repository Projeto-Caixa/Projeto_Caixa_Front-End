import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReportPrint from "../../Components/ReportPrint";

const ReportPage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.jwt) {
      navigate("/login");
    }
  });

  return <ReportPrint />;
};

export default ReportPage;
