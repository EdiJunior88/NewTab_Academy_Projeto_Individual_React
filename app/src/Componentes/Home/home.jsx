import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Modal } from '../Modal/modal';
import { Usuario } from '../Usuario/usuario';
import { cartoes } from "../Cartoes/cartoes"

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

  //Validação do cartão de crédito selecionado
  const dadosCartaoDeCredito = async (evento) => {
    evento.preventDefault();

    const formData = new FormData(evento.target);
    const value = formData.get("valorPago");
    const cartao = formData.get("selecionaCartao");
    const selecionaCartao = cartoes.find((cartoesObjeto) => cartoesObjeto.card_number === cartao);
  }

  return (
    <>
      {
        modalAberto && (
          <Modal 
            titulo = "Pagamento para "
            subtitulo = {pagamento.name}
            fecharModal = {() => setModalAberto(false)}
          >
            <form onSubmit={dadosCartaoDeCredito}>
              <input
                name="valorPago"
                type="text"
                placeholder="R$ 0,00"
                className="inputValor"
                required
              />

              <select name="selecionaCartao">
                {
                  cartoes.map((cartao) => {
                    return (
                      <option value={cartao.card_number}>
                        Cartão com final {cartao.card_number.substring(12)}
                      </option>
                    );
                  })
                }
              </select>

              <button
                type="submit"
                className='botao-submit'
              >
                Pagar
              </button>
            </form>
          </Modal>
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