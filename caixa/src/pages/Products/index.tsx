import React, { useEffect, useState } from 'react';
import HeadderCastem from '../../components/Headder';
import { BsTrash } from 'react-icons/bs';
import { BsPencil } from 'react-icons/bs';
import * as S from './style';
import { ProductsService } from '../../services/productService';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Product } from '../../types/interfaces';
import swal from 'sweetalert';
import { toast, ToastContainer } from 'react-toastify';
import Swal from 'sweetalert2';

import absolut from './../Sales/Icons/absolute.png';
import agua from './../Sales/Icons/agua.png';
import alcatra from './../Sales/Icons/alcatra.png';
import brahma from './../Sales/Icons/brahma.png';
import energetico from './../Sales/Icons/energetico.png';
import espumante from './../Sales/Icons/espumante.png';
import frios from './../Sales/Icons/frios.png';
import mandioca from './../Sales/Icons/mandioca.png';
import padrao from './../Sales/Icons/padrao.png';
import refrigerante from './../Sales/Icons/refrigerante.png';
import stella from './../Sales/Icons/stella.png';
import tanqueray from './../Sales/Icons/tanqueray.png';
import jack from './../Sales/Icons/jack.png';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState<any>([]);
  const [data, setData] = useState<any>({
    name: 'Nome Produto',
    title: 'Produto',
    icon: 'https://cdlresende.com.br/wp-content/uploads/2018/03/no-image-icon-4.png',
    description: '',
    price: 0,
    image:
      'https://cdlresende.com.br/wp-content/uploads/2018/03/no-image-icon-4.png',
    quantity: 0,
    avaliable: true,
  });

  const handleGetProducts = async () => {
    const response = await ProductsService.Get();
    setProducts(response!.data);
  };

  useEffect(() => {
    handleGetProducts();
  }, []);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '30px',
      padding: 0,
      border: 0,
      boxShadow: '0px 0px 100px #5ad6fc',
    },
  };

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleEditData = (e: any, index: any) => {
    setData({ ...data, [index]: e.target.value });
  };

  const handleEditDataNumber = (e: any, index: any) => {
    setData({ ...data, [index]: Number(e.target.value) });
  };

  const handleProductAdd = async () => {
    const response: any = await ProductsService.Add(data);
    if (!response) {
      swal({
        title: 'Erro',
        text: 'Error',
        icon: 'error',
        timer: 6000,
      });
    } else
      toast.success('Produto Adicionado com Sucesso!'),
        closeModal(),
        handleGetProducts();
  };

  const handleProductRemove = async (id: any) => {
    Swal.fire({
      title: 'Tem certeza?',
      text: 'Essa ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim, Deletar!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response: any = await ProductsService.Remove(id);
        if (!response) {
          swal({
            title: 'Erro',
            text: 'Error',
            icon: 'error',
            timer: 6000,
          });
        } else
          toast.success('Produto Removido com Sucesso!'),
            closeModal(),
            handleGetProducts();
      }
    });
  };

  const handleGetIcon = (name: any) => {
    switch (name) {
      case 'Absolut':
        return absolut;

      case 'Agua':
        return agua;

      case 'Alcatra':
        return alcatra;

      case 'Brahma':
        return brahma;

      case 'Energetico':
        return energetico;

      case 'Espumante':
        return espumante;

      case 'Frios':
        return frios;

      case 'Jack':
        return jack;

      case 'Mandioca':
        return mandioca;

      case 'Refrigerante':
        return refrigerante;

      case 'Stella':
        return stella;

      case 'Tanqueray':
        return tanqueray;

      default:
        return padrao;
    }
  };

  /// is logged
  const navigate = useNavigate();
  useEffect(() => {
    isLogged();
  }, []);
  let isLogged = () => {
    let jwt = localStorage.getItem('jwt');
    if (!jwt) {
      navigate('/testando');
    }
  };
  ///

  return (
    <>
      <HeadderCastem props={'products'} />
      <S.Page>
        <S.ButtonAddProduct>
          <button onClick={() => openModal()}>Adicionar Produto</button>
        </S.ButtonAddProduct>
        <S.ProductsContainer>
          {products.map((e: any, index: any) => {
            return (
              <S.CardProduct key={index}>
                <figure>
                  <img src={handleGetIcon(e.abv)} />
                </figure>
                <S.InfosProduct>{e.title}</S.InfosProduct>
                <S.InfosProduct>R${e.price}</S.InfosProduct>
                <S.LineButtons>
                  <S.ButtonAdd
                    onClick={() =>
                      toast.error('Esse recurso ainda esta em desenvolvimento.')
                    }
                  >
                    Editar
                  </S.ButtonAdd>
                  <S.ButtonRemove>
                    <BsTrash
                      onClick={() => handleProductRemove(e.id)}
                      size={25}
                    />
                  </S.ButtonRemove>
                </S.LineButtons>
              </S.CardProduct>
            );
          })}
        </S.ProductsContainer>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Add Product"
        >
          <S.HeadderModal>Adicionar Produto</S.HeadderModal>
          <S.ModalProduct>
            <S.CardProductModal>
              <figure>
                <img src={data.image} />
              </figure>
              <S.InfosProduct>{data.title}</S.InfosProduct>
              <S.InfosProduct>R${data.price}</S.InfosProduct>
            </S.CardProductModal>
            <S.FormAddProduct>
              <form>
                <div id="columm01">
                  <label>
                    Nome:
                    <input
                      type="text"
                      onChange={() => handleEditData(event, 'name')}
                    />
                  </label>
                  <label>
                    Nome Card:
                    <input
                      type="text"
                      onChange={() => handleEditData(event, 'title')}
                    />
                  </label>
                  <label>
                    Abreviação:
                    <input
                      type="text"
                      onChange={() => handleEditData(event, 'abv')}
                    />
                  </label>
                  {/* <label>
                    Icone:
                    <input
                      type="text"
                      onChange={() => handleEditData(event, "icon")}
                    />
                  </label> */}
                </div>
                <div id="columm02">
                  <label>
                    Preço:
                    <input
                      type="number"
                      onChange={() => handleEditDataNumber(event, 'price')}
                    />
                  </label>
                  <label>
                    Descrição:
                    <input
                      type="text"
                      onChange={() => handleEditData(event, 'description')}
                    />
                  </label>
                  <label>
                    Imagem:
                    <input
                      type="text"
                      onChange={() => handleEditData(event, 'image')}
                    />
                  </label>
                  {/* <label>
                    Quantidade:
                    <input
                      type="number"
                      onChange={() => handleEditDataNumber(event, "quantity")}
                    />
                  </label>
                  <label>
                    Em estoque?:
                    <input type="text" />
                  </label> */}
                </div>
              </form>
            </S.FormAddProduct>
          </S.ModalProduct>
          <S.ButtonAddProductModal>
            <button onClick={handleProductAdd}>Adicionar</button>
          </S.ButtonAddProductModal>
        </Modal>
        <ToastContainer />
      </S.Page>
    </>
  );
};

export default Products;
