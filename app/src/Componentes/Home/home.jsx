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

  //Validação do valor no input e verificar
  //qual o cartão de crédito selecionado
  const dadosCartaoDeCredito = async (evento) => {
    evento.preventDefault();

    const formData = new FormData(evento.target);
    const value = formData.get("valorPago");
    const cartao = formData.get("selecionaCartao");
    const selecionaCartao = cartoes.find((cartoesObjeto) => cartoesObjeto.card_number === cartao);
  }

  //Função para pegar os dados do pagamento (input)
  //conforme o cartão selecionado através da API

  
    await fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", 
    {
      method: "POST",
      body: {
        card_number: cartao,
        cvv: selecionaCartao.cvv,
        expiry_date: selecionaCartao.expiry_date,
        destination_user_id: pagamento.id,
        value: value,
      }
    }).json();

  
  // await (
  //   await fetch("https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989", 
  //   {
  //     method: "POST",
  //     body: {
  //       card_number: cartao,
  //       cvv: selecionaCartao.cvv,
  //       expiry_date: selecionaCartao.expiry_date,
  //       destination_user_id: pagamento.id,
  //       value: value,
  //     }
  //   })
  // ).json();



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