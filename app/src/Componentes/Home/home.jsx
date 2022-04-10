import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from '../Modal/modal';
import { Usuario } from '../Usuario/usuario';

export function Home(props) {
  const [listaUsuario, setListaUsuario] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [pagamento, setPagamento] = useState(null);
  const [pagamentoSucesso, setPagamentoSucesso] = useState(false);
  const [pagamentoErro, setPagamentoErro] = useState(false);

  //Coletar os dados do do usuário da API e colocar os dados da API 
  //(dentro do useEffect) para passar os valores em um array vazio
  //para controlar o hook e não criar um loop na lista
  useEffect(() => {
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then(resposta => {
        setListaUsuario(resposta.data)
        console.log(resposta);
      })
      .catch(erro => {
        console.log(erro);
      })
  }, []);

  //Função para ativar o modal de pagamento
  //e setar o pagamento para o map "listaUsuario"
  function botaoOnClick(usuario) {
    setPagamento(usuario);
    setModalAberto(true);
  }

  return (
    <>
      {
        modalAberto && (
          <Modal 
            titulo = "Pagamento para"
            subtitulo = {pagamento.name}
            fecharModal = {() => setModalAberto(false)}
          />
        )
      }

      {
        listaUsuario.map((usuario) => {
          return (
            <Usuario 
              onClick = {() => {
                botaoOnClick(usuario);
              }}
              usuarioImagem = {usuario.img}
              name = {usuario.name}
              key = {usuario.id}
              id = {usuario.id}
              username = {usuario.username}
            />
          )
        })
      }
    </>
  );
}