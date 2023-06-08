import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import PrintProducts from "./components/printProduct";
import Home from "./pages/Home";
import Log from "./pages/Log";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import { RoutePath } from "./types/routes";
import Login from "./pages/Login";

const Router = () => {
  return (
    <Routes>
      <>
        <Route path={RoutePath.HOMEPAGE} element={<Home />} />
        <Route path={RoutePath.SALES} element={<Sales />} />
        <Route path={RoutePath.PRODUCTS} element={<Products />} />
        <Route path={RoutePath.LOG} element={<Log />} />
        <Route path={RoutePath.PRINT} element={<PrintProducts />} />
        <Route path={RoutePath.LOGIN} element={<Login />} />
      </>

      {/* <Route path="*" element={<Home />} /> */}
      {/* recurso acima para direcionar url fora de padrão */}
    </Routes>
  );
};

export default Router;
