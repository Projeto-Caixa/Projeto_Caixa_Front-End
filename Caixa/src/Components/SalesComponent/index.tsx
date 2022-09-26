import React from "react";
import * as S from "./style";
import image from "../../assets/products/coca.png";

const SalesComponent = () => {
  let list = [
    {
      id: "10",
      name: "Coca",
      description: "Lata de coca cola 350ml",
      price: 5,
      img: "swdwdw3d",
    },
    {
      id: "11",
      name: "Cerveja",
      description: "Lata de cerveja 350ml",
      price: 5,
      img: "swdwdw3d",
    },
    {
      id: "12",
      name: "Espetinho",
      description: "1 unidade de espetinho de carne",
      price: 6,
      img: "swdwdw3d",
    },
    {
      id: "13",
      name: "Pastel",
      description: "Pastel de carne",
      price: 4,
      img: "swdwdw3d",
    },
    {
      id: "14",
      name: "Agua",
      description: "Garrafa de agua 300ml",
      price: 3,
      img: "swdwdw3d",
    },
    {
      id: "14",
      name: "Agua",
      description: "Garrafa de agua 300ml",
      price: 3,
      img: "swdwdw3d",
    },
    {
      id: "14",
      name: "Agua",
      description: "Garrafa de agua 300ml",
      price: 3,
      img: "swdwdw3d",
    },
    {
      id: "14",
      name: "Agua",
      description: "Garrafa de agua 300ml",
      price: 3,
      img: "swdwdw3d",
    },
    {
      id: "14",
      name: "Agua",
      description: "Garrafa de agua 300ml",
      price: 3,
      img: "swdwdw3d",
    },
    {
      id: "14",
      name: "Agua",
      description: "Garrafa de agua 300ml",
      price: 3,
      img: "swdwdw3d",
    },
    {
      id: "14",
      name: "Agua",
      description: "Garrafa de agua 300ml",
      price: 3,
      img: "swdwdw3d",
    },
  ];

  return (
    <S.Container>
      <S.Products>
        {list.map<React.ReactNode>((element) => {
          console.log(element);
          return (
            <S.ProductContainer>
              <S.ImageProduct src={image} />
              <S.ProductCard>
                <S.InfoProduct>
                  <S.TiTle> {element.name} </S.TiTle>
                  <S.Price> {element.price} </S.Price>
                </S.InfoProduct>
                <S.LineButtons>
                  <S.ButtonAdd>Add</S.ButtonAdd>
                  <S.ButtonAdd>Rmv</S.ButtonAdd>
                </S.LineButtons>
              </S.ProductCard>
            </S.ProductContainer>
          );
        })}
      </S.Products>
      <S.Infos>infos</S.Infos>
    </S.Container>
  );
};

export default SalesComponent;
