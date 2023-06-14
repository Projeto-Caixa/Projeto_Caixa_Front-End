import styled from "styled-components";

export const Page = styled.div`
  width: 100vw;
  height: 95vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  -webkit-box-shadow: 0px 0px 35px -14px rgb(93, 163, 166);
  -moz-box-shadow: 0px 0px 35px -14px rgb(93, 163, 166);
  box-shadow: 0px 0px 35px -14px rgb(93, 163, 166);

  width: 60%;
  height: 64%;
  border-radius: 50px;
  display: flex;
`;

export const InfoCompany = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  figure {
    margin: 0px;
    height: 40%;

    /* margin-bottom: 15%; */
    /* height: 50%; */

    img {
      height: 100%;
    }
  }
`;

export const LoginContent = styled.div`
  background: #00d7fe;
  /* background: linear-gradient(
    4deg,
    rgba(93, 163, 166, 1) 40%,
    rgba(144, 196, 221, 1) 100%
  ); */

  height: 100%;
  width: 50%;
  border-top-left-radius: 50px;
  border-bottom-right-radius: 50px;
  /* padding-left: 2.5%; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-size: 2.5rem;
    /* margin-bottom: 100px; */
    text-align: center;
  }

  #textDecoration {
    font-size: 1.4em;
    text-align: center;
    position: absolute;
    bottom: 20vh;
    /* color: red; */
  }

  form {
    textarea:focus,
    input:focus,
    select:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
      border-bottom: 1px solid white;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  label {
    font-size: 1.3rem;
  }

  input {
    margin: 10px;
    border-radius: 50px;
    font-size: 1.3rem;
    border: 0;
    background-color: white;
    color: #00d7fe;
    border-bottom: 1px solid white;
    height: 40px;
    width: 300px;
    /* text-align: center; */
    padding-left: 10px;
  }

  input::placeholder {
    color: #00d7fe;
  }

  button {
    /* -webkit-box-shadow: 0px 0px 35px -14px white;
    -moz-box-shadow: 0px 0px 35px -14px white;
    box-shadow: 0px 0px 35px -14px white; */

    width: 50%;
    height: 45px;
    outline: none;
    background-color: #00d7fe;
    color: white;
    border: 2px solid white;
    border-radius: 50px;
    font-size: 1.2rem;
    transition: all 0.3s;
    margin-top: 15%;
    /* font-weight: bold; */

    :hover {
      cursor: pointer;
      transform: scale(0.95);

      color: #00d7fe;
      background-color: white;
    }
  }

  a {
    text-decoration: none;
    color: white;
    :hover {
      cursor: pointer;
    }
  }
`;

export const ContentLogin = styled.div`
  margin-bottom: 12vh;
`;
