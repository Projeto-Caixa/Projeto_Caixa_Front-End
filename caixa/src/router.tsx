import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Sales from "./pages/Sales";
import { RoutePath } from "./types/routes";

const Router = () => {
  return (
    <Routes>
      <>
        <Route path={RoutePath.HOMEPAGE} element={<Home />} />
        <Route path={RoutePath.SALES} element={<Sales />} />
      </>

      {/* <Route path="*" element={<Home />} /> */}
      {/* recurso acima para direcionar url fora de padrão */}
    </Routes>
  );
};

export default Router;
