import styled, { css } from "styled-components";

export const Container = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primaryColor};
    display: flex;
    flex-direction: column;
    height: 95vh;
    width: 30vw;
    align-items: center;
    textarea:focus,
    input:focus,
    select:focus {
      outline: 0;
    }
  `}
`;

export const LogoLogin = styled.img`
  height: 22vh;
`;
export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 7vh;
  width: 40vw;
  margin-bottom: 30px;
`;
export const CardLogin = styled.div`
  ${({ theme }) => css`
    border: 2px solid ${theme.colors.primaryColor};
    border-radius: 20px;
    width: 90%;
    height: 70%;
  `}
`;
export const LoginText = styled.h1`
  margin: 0;
  margin: 1vw 0 0 4vh;
  font-size: 6vh;
`;
export const FormLogin = styled.form`
  font-weight: 300;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15%;
`;
export const InputLogin = styled.input`
  ${({ theme }) => css`
    border: 1px solid ${theme.colors.primaryColor};
    color: ${theme.colors.primaryColor};
    background-color: white;
    width: 80%;
    height: 6vh;
    border-radius: 50px;
    font-size: large;
    margin: 10px;
    text-indent: 5%;

    ::placeholder {
      color: ${theme.colors.primaryColor};
    }
  `}
`;

export const PasswordText = styled.h1`
  border: 0;
  margin: 0;
  font-size: 3vh;
  text-align: left;
  transition: all 0.5s;

  :hover {
    transform: scale(1.1);
    border: 0;
    cursor: pointer;
  }
`;

export const ButtonLogin = styled.button`
  ${({ theme }) => css`
    width: 50%;
    height: 5.5vh;
    border-radius: 50px;
    margin-top: 15%;
    background-color: ${theme.colors.primaryColor};
    font-size: 4vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    color: white;
    transition: all 0.5s;

    :hover {
      transform: scale(1.1);
      cursor: pointer;
      border: 0;
    }
  `}
`;
