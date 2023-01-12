import React, { useState, useEffect } from "react";
import * as S from "./style";
import { GrAdd } from "react-icons/gr";
import { GrFormSubtract } from "react-icons/gr";
import { BiTrashAlt } from "react-icons/bi";
import { ProductsService, SaleService } from "../../Services/productsService";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SalesComponent = () => {
  const [listProducts, setListProducts] = useState([]);
  const [cont, setCont] = useState([""]);
  const [quantity, setQuantity] = useState(0);
  const [list, setList] = useState([{}]);

  // const navegate = useNavigate();

  const renderProducts = async () => {
    const response = await ProductsService.Get();
    setList(response.data);
  };

  useEffect(() => {
    renderProducts();
    setList([]);
  }, []);

  const handleSale = async (e) => {
    e.preventDefault();

    let jsonList = JSON.stringify(listProducts);
    // console.log(listProducts);
    // console.log(jsonList);
    let user = localStorage.getItem("IdUser");
    console.log(user);

    let enviar = { idVendedor: user, list: [jsonList] };

    const response = await SaleService.Sale(enviar);

    if (!response) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Erro ao enviar",
        showConfirmButton: false,
        timer: 3000,
      });
    }

    window.print();
    setListProducts([]);
  };

  function addToCart(prod) {
    let verifica = listProducts.filter((element) => element.name == prod.name);
    if (verifica.length === 0) {
      prod.quantity = 1;
      setListProducts([...listProducts, prod]);
    } else if (verifica.length != 0) {
      let position = listProducts.findIndex((index) => index.name == prod.name);
      let newListProducts = listProducts;
      newListProducts[position].quantity++;
      setListProducts([...newListProducts]);
    }
  }

  function RemoveToCart(prod) {
    let verifica = listProducts.filter((element) => element.name == prod.name);
    if (verifica.length != 0) {
      let position = listProducts.findIndex((index) => index.name == prod.name);
      let newListProducts = listProducts;

      if (newListProducts[position].quantity > 0) {
        newListProducts[position].quantity--;
      }

      if (newListProducts[position].quantity === 0) {
        newListProducts.splice(position, 1);

        setListProducts([...newListProducts]);
      }

      setListProducts([...newListProducts]);
    }
  }

  let handleRemoveComp = () => {
    setListProducts([]);
  };

  return (
    <S.Container className="teste">
      <S.Products className="Products">
        {list.map((element, index) => {
          return (
            <S.ProductContainer key={index}>
              <S.ImageProduct src={element.image} />
              <S.ProductCard>
                <S.InfoProduct>
                  <S.TiTle> {element.nameabv} </S.TiTle>
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

                  <S.ButtonRemove
                    onClick={() => {
                      RemoveToCart(element);
                    }}
                  >
                    <GrFormSubtract />
                  </S.ButtonRemove>
                </S.LineButtons>
                <div id="quant">
                  {element.quantity ? `x${element.quantity}` : ""}
                </div>
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
                <S.Amount>x{element.quantity}</S.Amount>
                <S.NameProduct>{element.name}</S.NameProduct>
                <S.PriceProduct>R${element.price}.00</S.PriceProduct>
              </S.CardProductCart>
            );
          })}
        </S.Infos>
        <S.CloseSale className="CloseSale">
          <S.Close onClick={handleRemoveComp}>
            <BiTrashAlt />
          </S.Close>
          <S.RemoveSale onClick={handleSale}>Finalizar Venda</S.RemoveSale>
        </S.CloseSale>
      </S.Details>
      <div className="print" id="printable">
        {listProducts.map((item, index) => {
          let itens = [];
          console.log("🛺🛺🚙🚙🚐", itens);

          if (item.quantity > 1) {
            for (let index = 1; index <= item.quantity; index++) {
              itens.push(
                <div className="aqui" key={index}>
                  {/* <S.Break /> */}

                  <div className="container">
                    <div className="line1">
                      <img src={item.image} alt={item.name} />
                      <h1>{item.name}</h1>
                    </div>
                    <div className="line2">
                      <h1>R$ {item.price}</h1>
                    </div>
                    <div className="line3">
                      <div>
                        <h2>07/10</h2>
                        <h2>Imbituva-PR</h2>
                      </div>
                    </div>
                    <h2 className="loc">Paróquia Santo Antonio</h2>
                    {/* <div style="page-break-after: always"></div> */}
                    {/* <div style={{ pageBreakAfter: "always" }}></div> */}
                  </div>
                </div>
              );
            }
          } else if (item.quantity === 0) {
            itens.push(
              <div className="aqui" key={index}>
                {/* <S.Break /> */}
                <div className="container">
                  <div className="line1">
                    <img src={item.image} alt={item.name} />
                    <h1>{item.name}</h1>
                  </div>
                  <div className="line2">
                    <h1>R$ {item.price}</h1>
                  </div>
                  <div className="line3">
                    <div>
                      <h2>07/10</h2>
                      <h2>Imbituva-PR</h2>
                    </div>
                  </div>
                  <h2 className="loc">Paróquia Santo Antonio</h2>
                  {/* <div style="page-break-after: always"></div> */}
                  {/* <div style={{ pageBreakAfter: "always" }}></div> */}
                </div>
              </div>
            );
          }

          // );
          // let itens = [];
          // if (item.quant > 1) {
          //   for (let index = 1; index <= item.quantidade; index++) {
          //     itens.push(
          //       <div className="pagina">
          //         <div className="barraquinha">Festa</div>
          //         <div className="titulo">{item.nome.toUpperCase()}</div>
          //         <div className="preco">
          //           R$ {item.valor.toFixed(2).replace(".", ",")}
          //         </div>
          //         <div className="descricao">Paróquia Santo Antônio</div>
          //         <div className="descricao">Imbituva - Pr</div>
          //         <div className="hora">
          //           {/* {moment().format("DD/MM/YYYY HH:mm:ss ")} */}
          //         </div>
          //       </div>
          //     );
          //   }
          // }
          // });
          return itens;
        })}
      </div>
    </S.Container>
  );
};

export default SalesComponent;
// xwesxw
