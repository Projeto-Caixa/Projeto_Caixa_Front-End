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
                src="https://lh3.googleusercontent.com/_NXkQFWC-Y4barof7tmwBU6ATx8MRqe2fXnQ-Ptx08PYuUfsqQOh97Df-ilwZjsTPcpCvUq7p8rbXhjW9dtxew8dzj8gKN8tdtOdGcSkfIKn3ytXzcSf1j9gGg_S8COWmpMedhL6dW2ocIrU4pE-9tJek_SAk4ld2iiGuzR1WM8Q_5ND2IIiE8PbYoC5HgGSc6Yu8RuH69CFLmInxAUfNmreLuiuCPMPZyRSkgJikozjG5HLnJMBtymzrGq1Zp4qjZIdut8GkOWPIuff3oOHHQNdYqItgPBVHbLZSIRv14g5HtbUE8UZ10ztDyNpbNVUDTXjNWtUCuOHgGU-TN7Gf-T4e-0iy8JC7CqaXxuUY8M8JUFfnQNtvrGvjQ5P7BSwXgCz2i-Ocd62xoeqb5npew05zUKMUvoOvgF66qzMXdTckArDOs1kWSJNXko4UJ5hCmiwsgAD_D6hohoXMgHTYjdBfTlVYjWX0SUhNJ_ryYdH3latLSr1JQbu9PcKrXzNgMPIgTJoTj_OJQF9RUU_IO2NuN74BbgE1Xi0CdnoMp0TVx7C1oSu3UulEAXuhhRUltqnWFxl-GYg70m104iPIF0MZevPFPaRBk-fns79lA7A2CpCgKT9gVQAbWkCdB6ePRuKSX7ntDXblxz-9PRW9ZElRb3RUqRA1_XkMlGzS8MIsNct4ozkdmFVD6Xz4h-1C91x-TCuOTd-hq9bmjTleamrEF4Tc0wwkvhYNDXIG_4928RStK6XHg0FxKC6nNBnkekYMZifW0QHJeuJPpSXSH10UrSeoc_k86Ed--OKK8T99drcMd4mEtgu8Os3uznpI8Vftol9zervm_hnFi_aHYIgYsaLZYhrJWNblRKwx9mJWhXWa-U_U4cZBVUHsrAvYu40rDf7igczbWrTxZQNhdxzp1dld8JQ9x0UmVzdFzB5h3Md_mnldTAJrvnvW263Njn425NnYgcPLJjKUuKAXzZClS6qMEn2nxdYNBfTdKtcjlNqqXLz_6hfaHI-EqIYbSnOom1GKRtsnhyEGahXOrKtqvlSWSodqVufrk2wpVNk0m88EWFYwHx0PXJj588=w487-h201-s-no?authuser=1"
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
