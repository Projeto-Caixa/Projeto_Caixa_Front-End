import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ReportPage from "./Pages/ReportP";
import Sales from "./Pages/Sales";

const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"/produtos"} element={<Sales />} />
      <Route path={"/relatorio"} element={<ReportPage />} />
    </Routes>
  );
};

export default Router;
