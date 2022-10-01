import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Sales from "./Pages/Sales";
import { RoutePath } from "./types/router";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGINPAGE} element={<Login />} />
      <Route path={RoutePath.HOMEPAGE} element={<Home />} />
      <Route path={RoutePath.VENDAS} element={<Sales />} />
    </Routes>
  );
};

export default Router;
