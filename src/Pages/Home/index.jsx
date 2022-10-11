import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HomeComponent from "../../Components/HomeComponent";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.jwt) {
      navigate("/login");
    }
  });

  return (
    <>
      <HomeComponent />
    </>
  );
};

export default Home;
