import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import { RoutePath } from "./types/router";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGINPAGE} element={<Login />} />
    </Routes>
  );
};

export default Router;
