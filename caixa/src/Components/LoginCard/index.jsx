import * as S from "./style";
import logoAzul from "../../assets/images/logoAzul.png";

const LoginCard = () => {
  return (
    <>
      <S.Container>
        <S.LogoLogin src={logoAzul} />
        {/* <S.Title>Seja bem vindo(a)</S.Title> */}
        <S.CardLogin>
          <S.LoginText>Login</S.LoginText>
          <S.FormLogin>
            <S.InputLogin placeholder="Email:" />
            <S.InputLogin placeholder="Senha:" />
            <S.PasswordText>Esqueceu a senha?</S.PasswordText>
            <S.ButtonLogin type="submit">Enviar</S.ButtonLogin>
          </S.FormLogin>
        </S.CardLogin>
      </S.Container>
    </>
  );
};

export default LoginCard;
