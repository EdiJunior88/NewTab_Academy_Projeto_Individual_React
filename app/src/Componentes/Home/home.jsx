import { useState, useEffect } from "react";
import axios from "axios";
import "../Home/home.css";
import Cabecalho from "../Cabecalho/cabecalho";
import { Modal } from "../Modal/modal";
import { Usuario } from "../Usuario/usuario";
import { cartoes } from "../Cartoes/cartoes";
import { Mascara } from "../Mascara/mascara";

export function Home() {
  const [listaUsuario, setListaUsuario] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [pagamento, setPagamento] = useState(null);
  const [pagamentoSucesso, setPagamentoSucesso] = useState(false);
  const [pagamentoErro, setPagamentoErro] = useState(false);

  //Coletar os dados do do usuário da API e colocar os dados da API
  //(dentro do useEffect) para passar os valores em um array vazio
  //para controlar o hook e não criar um loop na lista
  useEffect(() => {
    axios
      .get("https://www.mocky.io/v2/5d531c4f2e0000620081ddce")
      .then((resposta) => {
        setListaUsuario(resposta.data);
        // console.log(resposta);
      })
      .catch((erro) => {
        console.log("ERRO NA API", erro);
      });
  }, []);

  //Função para ativar o modal de pagamento
  //e setar o pagamento para o map "listaUsuario"
  function botaoOnClick(usuario) {
    setPagamento(usuario);
    setModalAberto(true);
  }

  //Validação do valor no input
  //verificar qual o cartão de crédito selecionado
  const dadosCartaoDeCredito = async (evento) => {
    evento.preventDefault();

    const formData = new FormData(evento.target);
    const value = formData.get("valorPago");
    const cartao = formData.get("selecionaCartao");
    const selecaoCartao = cartoes.find(
      (cartaoObjeto) => cartaoObjeto.card_number === cartao
    );

    //Função para pegar os dados do pagamento (input)
    //e submeter a requisição "POST" conforme o cartão selecionado
    await (
      await fetch(
        "https://run.mocky.io/v3/533cd5d7-63d3-4488-bf8d-4bb8c751c989",
        {
          method: "POST",
          body: {
            card_number: cartao,
            cvv: selecaoCartao.cvv,
            expiry_date: selecaoCartao.expiry_date,
            destination_user_id: pagamento.id,
            value: value,
          },
        }
      )
    ).json();

    //Condicional para verificar se o cartão selecionado for igual ao da API
    //forçando a mensagem de erro ao selecionar o cartão "4111111111111234"
    //se for "true" abre uma mensagem que o pagamento foi realizado
    //se for "false" abre uma mensagem que o pagamento foi recusado
    if (cartao === "1111111111111111") {
      setPagamentoSucesso(true);
    } else {
      setPagamentoErro(true);
    }
    setModalAberto(false);
  };

  return (
    <>
      {<Cabecalho />}

      {
        //Modal dados de pagamento e seleção do cartão de crédito
        modalAberto && (
          <Modal
            titulo='Pagamento para '
            subtitulo={pagamento.name}
            fecharModal={() => setModalAberto(false)}>
            <form onSubmit={dadosCartaoDeCredito}>
              <input
                name='valorPago'
                type='text'
                placeholder='R$ 0,00'
                className='inputValor'
                onKeyUp={Mascara}
                maxLength='30'
                required
              />

              <select name='selecionaCartao' className='selectValor'>
                {cartoes.map((cartao, id) => {
                  return (
                    <option value={cartao.card_number} key={id}>
                      Cartão com final {cartao.card_number.substring(12)}
                    </option>
                  );
                })}
              </select>

              <button type='submit' className='botao-submit'>
                Pagar
              </button>
            </form>
          </Modal>
        )
      }

      {
        //Listagem de usuários com nome, ID e Username
        listaUsuario.map((usuario) => {
          return (
            <Usuario
              onClick={() => {
                botaoOnClick(usuario);
              }}
              usuarioImagem={usuario.img}
              name={usuario.name}
              key={usuario.id}
              id={usuario.id}
              username={usuario.username}
            />
          );
        })
      }

      {
        //Modal de pagamento sucesso no pagamento (true)
        pagamentoSucesso && (
          <Modal
            titulo='Recibo de pagamento'
            fecharModal={() => setPagamentoSucesso(false)}>
            <span className='texto-rodape'>
              O pagamento foi concluído com sucesso!
            </span>
          </Modal>
        )
      }

      {
        //Modal de pagamento erro no pagamento (false)
        pagamentoErro && (
          <Modal
            titulo='Recibo de pagamento'
            fecharModal={() => setPagamentoErro(false)}>
            <span className='texto-rodape'>
              O pagamento <strong className='strong'>não</strong> foi concluído
              com sucesso!
            </span>
          </Modal>
        )
      }
    </>
  );
}
