import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DadosUsuarios() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    axios.get('https://www.mocky.io/v2/5d531c4f2e0000620081ddce')
      .then(resposta => {
        console.log(resposta);
        setItens(resposta.data)
      })
      .catch(erro => {
        console.log(erro);
      })
  });


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
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default DadosUsuarios;