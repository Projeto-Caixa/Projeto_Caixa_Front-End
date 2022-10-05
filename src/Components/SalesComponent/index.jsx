import React, { useState, useEffect } from "react";
import * as S from "./style";
import { GrAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { BiTrashAlt } from "react-icons/bi";

const SalesComponent = () => {
  let list = [
    {
      id: "10",
      name: "Água",
      product: "Água",
      description: "Garrafa de Água",
      price: 2,
      img: "https://restaurantwp.mformula.info/wp-content/uploads/2015/10/GARRAFA_510ML-TESTE.png",
      quant: 1,
    },
    {
      id: "11",
      name: "Cerveja",
      product: "Cerveja",
      description: "Lata de cerveja",
      price: 5,
      img: "https://giassi.vtexassets.com/arquivos/ids/519419/Cerveja-Lager-Brahma-Chopp-Lata-350ml.png?v=637995426899930000",
      quant: 1,
    },
    {
      id: "12",
      name: "Refrigerante",
      product: "Refrigerante",
      description: "Lata de Refrigerante",
      price: 5,
      img: "https://s3-us-west-2.amazonaws.com/varejao.ip/coca-cola-lata-220.png",
      quant: 1,
    },
    {
      id: "13",
      name: "Café com leite",
      product: "Café",
      description: "Copo de café com leite",
      price: 4,
      img: "https://cdn.shopify.com/s/files/1/0835/8563/products/copocomduplaparede.png?v=1661979921",
      quant: 1,
    },
    {
      id: "14",
      name: "Pastel",
      product: "Pastel",
      description: "1un Pastel de carne",
      price: 5,
      img: "https://site2021.bangalodospasteis.com.br/media/2021/03/pastel-de-beijinho/bangalopastelfechado.png",
      quant: 1,
    },
    {
      id: "14",
      name: "Bolo",
      product: "Bolo",
      description: "1un Pedaço de bolo",
      price: 6,
      img: "https://tradicionalbolosetortas.com.br/wp-content/uploads/2014/12/bolo-chocolate-branco-tradicional.png",
      quant: 1,
    },
    {
      id: "14",
      name: "X-Santo Antonio",
      product: "X-Sto",
      description: "1un X-Santo Antonio",
      price: 12,
      img: "https://levesabor.com.br/media/25/sanduiche-carne-de-panela.png",
      quant: 1,
    },
    {
      id: "14",
      name: "Sonho",
      product: "Sonho",
      description: "1un Sonho",
      price: 3,
      img: "https://imagensemoldes.com.br/wp-content/uploads/2020/05/Sonho-Doces-PNG.png",
      quant: 1,
    },
    {
      id: "14",
      name: "Bandeja com 4 sonhos",
      product: "Bdj Sonho",
      description: "4un Sonho",
      price: 10,
      img: "https://compredoprodutor.com.br/media/catalog/product/cache/1/image/420x420/8e906e14e88dfd1d0dc6cb714ce405bf/s/o/sonhos_sortidos_2_m_dio_.png",
      quant: 1,
    },
    {
      id: "14",
      name: "Paçoca",
      product: "Paçoca",
      description: "1un Paçoca",
      price: 0.5,
      img: "https://www.arcor.com.br/wp-content/uploads/2019/07/produto-amor-pacoca.png",
      quant: 1,
    },
    {
      id: "14",
      name: "Trident",
      product: "Trident",
      description: "1un Trident",
      price: 3,
      img: "https://static.paodeacucar.com/img/uploads/1/986/24071986.png",
      quant: 1,
    },
    {
      id: "14",
      name: "Halls",
      product: "Halls",
      description: "1un Halls",
      price: 3,
      img: "https://trimais.vteximg.com.br/arquivos/ids/1008816-1000-1000/foto_original.jpg?v=637395840525170000",
      quant: 1,
    },
  ];

  // type sla = {
  //   element: obj
  // }

  const [listProducts, setListProducts] = useState([{}]);
  const [cont, setCont] = useState([""]);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {}, [listProducts]);
  function addToCart(prod) {
    // if (listProducts.length) {
    //   const exists = listProducts.find((item) => item.name == prod.name);
    //   exists
    //     ? prod.quant
    //       ? setListProducts(
    //           listProducts.map((item) => (item.name == prod.name ? prod : item))
    //         )
    //       : setListProducts(
    //           listProducts.filter((item) => item.nome != prod.nome)
    //         )
    //     : setListProducts([...listProducts, prod]);
    // }

    // const exists = listProducts.find((item) => item.name == prod.name);

    let verifica = listProducts.filter((element) => element.name == prod.name);

    // console.log(verifica);

    // console.log(control);
    if (verifica.length === 0) {
      setListProducts([...listProducts, prod]);
      console.log("Esta no if");
    } else
      listProducts.map((i) => {
        if (i.name === prod.name) {
          // console.log(i.quant);
          setListProducts([...listProducts, (prod.quant += i.quant)]);
          // i.quant++;
        }
      });
    // let control = listProducts.map((index) => {
    //   if (index.name === prod.name) {
    //     return prod.quant++;
    //   }
    // });
  }
  // console.log(control);

  console.log("depois", listProducts);
  let g = ["1", "2"];

  return (
    <S.Container className="teste">
      <S.Products className="Products">
        {list.map((element, index) => {
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
      <S.Details>
        <S.Infos className="Infos">
          <S.TitleCart>
            <span>Qntd</span>
            <span>Produto</span>
            <span>Valor R$</span>
          </S.TitleCart>
          {listProducts.map((element, index) => {
            return (
              <S.CardProductCart key={index}>
                <S.Amount>x{element.quant}</S.Amount>
                <S.NameProduct>{element.name}</S.NameProduct>
                <S.PriceProduct>R${element.price}.00</S.PriceProduct>
              </S.CardProductCart>
            );
          })}
        </S.Infos>
        <S.CloseSale className="CloseSale">
          <S.RemoveSale>Finalizar Venda</S.RemoveSale>
          <S.Close>
            <BiTrashAlt />
          </S.Close>
        </S.CloseSale>
      </S.Details>
      <div className="print" id="printable">
        {g.map((E, index) => {
          return (
            <div key={index}>
              <S.Break />
              <div className="container">
                <div className="line1">
                  <img src="https://cdn-icons-png.flaticon.com/512/108/108219.png" />
                  <h1>Lata de refrigerante</h1>
                </div>
                <div className="line2">
                  <h1>R$ 5.00</h1>
                </div>
                <div className="line3">
                  <div>
                    <h2>05/10</h2>
                    <h2>Imbituva-PR</h2>
                  </div>
                </div>
              </div>
              <h2 className="loc">Paróquia Santo Antonio</h2>
              {/* <div style="page-break-after: always"></div> */}
              {/* <div style={{ pageBreakAfter: "always" }}></div> */}
            </div>
          );
        })}
      </div>
    </S.Container>
  );
};

export default SalesComponent;
// xwesxw
