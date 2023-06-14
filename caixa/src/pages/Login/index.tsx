import React, { useState, useRef } from "react";
import * as S from "./style";
// import Headder from "../../Components/Headder";
import { AuthService } from "../../services/Auth";
import { Auth } from "../../types/interfaces";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { ToastContainer, toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

const Login = () => {
  const [data, setData] = useState<Auth>({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  let handleChangeValue = (e: any, name: string) => {
    setData({ ...data, [name]: e.target.value });
  };

  let LoadSppiner: any = useRef();
  let Entrar: any = useRef();
  let Button: any = useRef();

  const handleLogin = async (e: React.SyntheticEvent) => {
    LoadSppiner.current!.style.display = "block";
    Entrar.current!.style.display = "none";
    Button.current!.style.border = "0";

    e.preventDefault();

    const response: any = await AuthService.Login(data);

    LoadSppiner.current!.style.display = "none";
    Entrar.current!.style.display = "Block";
    Button.current!.style.border = "1px solid white";

    let token = response.data.token;
    let info = response.data.user;
    console.log(info);

    localStorage.setItem("jwt", token);
    localStorage.setItem("user", info.name);
    localStorage.setItem("isAdmin", info.isAdmin);
    localStorage.setItem("userId", info.id);

    if (response.status != 200 && response.status != 204) {
      swal({
        title: "Erro",
        text: `teste`,
        icon: "error",
        timer: 6000,
      });
    }
    navigate("/");
  };

  return (
    <>
      {/* <Headder props="home" /> */}
      <S.Page>
        <S.Content>
          <S.InfoCompany className="animate__animated animate__fadeIn">
            <figure>
              <img
                className="animate__animated animate__fadeIn"
                src="https://jacaimages.vercel.app/imgs/logos/castem.png"
              />
            </figure>
          </S.InfoCompany>
          <S.LoginContent className="animate__animated animate__fadeIn">
            <S.ContentLogin>
              <p>Realize seu login</p>
              <form onSubmit={handleLogin}>
                <label>
                  Email:
                  <input
                    required
                    type="email"
                    onChange={() => handleChangeValue(event, "email")}
                  />
                </label>
                <label>
                  Senha:
                  <input
                    required
                    type="password"
                    onChange={() => handleChangeValue(event, "password")}
                  />
                </label>
                <button ref={Button}>
                  <span ref={Entrar}>Entrar</span>
                  <Box ref={LoadSppiner} display="none">
                    <CircularProgress />
                  </Box>
                </button>
                {/* <span id="textDecoration">
                  Registrar, controlar e divulgar: <br />
                  eis os três objetivos nobres da contabilidade
                </span> */}
              </form>
            </S.ContentLogin>
            <a href="https://www.contabilidadesilemar.com.br">
              Visite Nosso Site
            </a>
          </S.LoginContent>
          <ToastContainer />
        </S.Content>
      </S.Page>
    </>
  );
};

export default Login;
