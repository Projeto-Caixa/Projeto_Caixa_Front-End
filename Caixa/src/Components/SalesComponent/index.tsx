import React, { useState } from "react";
import * as S from "./style";
import image from "../../assets/products/coca.png";
import { GrAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";

const SalesComponent = () => {
  let list = [
    {
      id: "10",
      name: "Água",
      product: "Água",
      description: "Garrafa de Água",
      price: 2,
      img: "https://restaurantwp.mformula.info/wp-content/uploads/2015/10/GARRAFA_510ML-TESTE.png",
    },
    {
      id: "11",
      name: "Cerveja",
      product: "Cerveja",
      description: "Lata de cerveja",
      price: 5,
      img: "https://giassi.vtexassets.com/arquivos/ids/519419/Cerveja-Lager-Brahma-Chopp-Lata-350ml.png?v=637995426899930000",
    },
    {
      id: "12",
      name: "Refrigerante",
      product: "Refrigerante",
      description: "Lata de Refrigerante",
      price: 5,
      img: "https://s3-us-west-2.amazonaws.com/varejao.ip/coca-cola-lata-220.png",
    },
    {
      id: "13",
      name: "Café com leite",
      product: "Café",
      description: "Copo de café com leite",
      price: 4,
      img: "https://cdn.shopify.com/s/files/1/0835/8563/products/copocomduplaparede.png?v=1661979921",
    },
    {
      id: "14",
      name: "Pastel",
      product: "Pastel",
      description: "1un Pastel de carne",
      price: 5,
      img: "https://site2021.bangalodospasteis.com.br/media/2021/03/pastel-de-beijinho/bangalopastelfechado.png",
    },
    {
      id: "14",
      name: "Bolo",
      product: "Bolo",
      description: "1un Pedaço de bolo",
      price: 6,
      img: "https://tradicionalbolosetortas.com.br/wp-content/uploads/2014/12/bolo-chocolate-branco-tradicional.png",
    },
    {
      id: "14",
      name: "X-Santo Antonio",
      product: "X-Sto",
      description: "1un X-Santo Antonio",
      price: 12,
      img: "https://levesabor.com.br/media/25/sanduiche-carne-de-panela.png",
    },
    {
      id: "14",
      name: "Sonho",
      product: "Sonho",
      description: "1un Sonho",
      price: 3,
      img: "https://imagensemoldes.com.br/wp-content/uploads/2020/05/Sonho-Doces-PNG.png",
    },
    {
      id: "14",
      name: "Bandeja com 4 sonhos",
      product: "Bdj Sonho",
      description: "4un Sonho",
      price: 10,
      img: "https://compredoprodutor.com.br/media/catalog/product/cache/1/image/420x420/8e906e14e88dfd1d0dc6cb714ce405bf/s/o/sonhos_sortidos_2_m_dio_.png",
    },
    {
      id: "14",
      name: "Paçoca",
      product: "Paçoca",
      description: "1un Paçoca",
      price: 0.5,
      img: "https://www.arcor.com.br/wp-content/uploads/2019/07/produto-amor-pacoca.png",
    },
    {
      id: "14",
      name: "Trident",
      product: "Trident",
      description: "1un Trident",
      price: 3,
      img: "https://static.paodeacucar.com/img/uploads/1/986/24071986.png",
    },
    {
      id: "14",
      name: "Halls",
      product: "Halls",
      description: "1un Halls",
      price: 3,
      img: "https://trimais.vteximg.com.br/arquivos/ids/1008816-1000-1000/foto_original.jpg?v=637395840525170000",
    },
  ];

  type obj = {
    description: string;
    id: string;
    img: string;
    name: string;
    price: number;
    product: string;
  };
  // type sla = {
  //   element: obj
  // }

  const [listProducts, setListProducts] = useState<obj[]>([{} as obj]);
  const [listProductsFilter, setListProductsFilter] = useState([{}]);

  async function addToCart(prod: any) {
    setListProducts([...listProducts, prod]);
  }

  return (
    <S.Container>
      <S.Products>
        {list.map<React.ReactNode>((element, index) => {
          return (
            <S.ProductContainer key={index}>
              <S.ImageProduct src={element.img} />
              <S.ProductCard>
                <S.InfoProduct>
                  <S.TiTle> {element.product} </S.TiTle>
                  <S.Price> R$ {element.price} </S.Price>
                </S.InfoProduct>
                <S.LineButtons>
                  <S.ButtonAdd
                    onClick={() => {
                      addToCart(element);
                    }}
                  >
                    <GrAdd />
                  </S.ButtonAdd>
                  <S.ButtonRemove>
                    <GrFormSubtract />
                  </S.ButtonRemove>
                </S.LineButtons>
              </S.ProductCard>
            </S.ProductContainer>
          );
        })}
      </S.Products>
      <S.Infos>
        {listProducts.map<React.ReactNode>((element: any, index: number) => {
          let convertProducts = listProducts.filter(
            (index) => index.name === element.name
          );

          return (
            <S.CardProductCart key={index}>
              <S.Amount>{convertProducts.length}</S.Amount>
              <S.NameProduct>{element.name}</S.NameProduct>
              <S.PriceProduct>{element.price}</S.PriceProduct>
            </S.CardProductCart>
          );
        })}
      </S.Infos>
    </S.Container>
  );
};

export default SalesComponent;
