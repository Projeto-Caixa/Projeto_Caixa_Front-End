import * as S from "./style";
import logoAzul from "../../assets/images/logoAzul.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginService, RegisterService } from "../../Services/authService";
import Swal from "sweetalert2";

const LoginCard = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navegate = useNavigate();

  const handleChangesValues = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLoginUser = async (e) => {
    e.preventDefault();

    const response = await loginService.Login(values);

    if (!response) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Informações incorretas",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    const jwt = response.data.token;
    const idUser = response.data.user.id;

    if (jwt) {
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("IdUser", idUser);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Logado com sucesso!",
        showConfirmButton: false,
        timer: 1500,
      });
      navegate("/produtos");
    }
  };

  return (
    <>
      <S.Container>
        <S.LogoLogin src={logoAzul} />
        {/* <S.Title>Seja bem vindo(a)</S.Title> */}
        <S.CardLogin>
          <S.LoginText>Login</S.LoginText>
          <S.FormLogin onSubmit={handleLoginUser}>
            <S.InputLogin
              onChange={handleChangesValues}
              name="email"
              placeholder="Email:"
            />
            <S.InputLogin
              onChange={handleChangesValues}
              name="password"
              placeholder="Senha:"
            />
            {/* <S.PasswordText>Esqueceu a senha?</S.PasswordText> */}
            <S.ButtonLogin type="submit">Enviar</S.ButtonLogin>
          </S.FormLogin>
        </S.CardLogin>
      </S.Container>
    </>
  );
};

export default LoginCard;
