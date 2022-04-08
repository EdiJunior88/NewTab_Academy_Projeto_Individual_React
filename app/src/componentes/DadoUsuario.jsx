import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ModalPagamento from './ModalPagamento';

// Função para mostrar os dados dos usuários através de uma API

function Usuario() {
  const [itens, setItens] = useState([]);
  const [modalAberto, setModalAberto] = useState(false)

  //Coloca os dados da API (parâmetro) e passa os valores 
  //em um array vazio para controlar o hook (useEffect())
  useEffect(() => {
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then(resposta => {
        setItens(resposta.data)
        console.log(resposta);
      })
      /* .catch(erro => {
        console.log(erro);
      }) */
  }, []);


  return (
    <div>
      <h1>Lista de Usuários</h1>
        {
          itens.map(item => (
            <div className='container' key={item.id}>
              <div className='container-lista-usuario'>
                <div className='foto-usuario'>
                  <img src={item.img} />
                </div>

                <div className='descricao-usuario'>
                  <span>Nome do Usuário: <span>{item.name}</span></span>
                  <span>ID: {item.id}</span>
                  <span>Username: {item.username}</span>
                </div>

                <div className='container-botao'>
                  <button onClick={() => setModalAberto(true)}>Show Modal</button>
                  <ModalPagamento onClose={() => setModalAberto(false)} modalAberto={modalAberto} />
                </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default Usuario;