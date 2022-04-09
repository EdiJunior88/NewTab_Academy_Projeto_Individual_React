import React from 'react';

export function Usuario(props) {
  return (
    <div className='container-lista-usuario'>
      <div className='lista-usuario'>
        <img src={props.usuarioImagem} alt={props.name} />
        <div className='usuario-perfil'>
          <h4>
            Nome do Usuário: {props.name}
          </h4>

          <h4>
            ID: {props.id} - Username: {props.username}
          </h4>
        </div>
      </div>

      <div>
        <button onClick={props.onClick}>Pagar</button>
      </div>
    </div>
  );
}