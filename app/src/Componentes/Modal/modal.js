import React from "react";
import "./modal.css";

export function Modal(props) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <button className='header-botao'>
            <img className="botao-png" src='./assets/img/close-window.png' alt='Fechar' onClick={props.fecharModal} />
          </button>
        </div>

        <div className='modal-body'>
          <span className='titulo'>
            {props.titulo}
          </span>
          <span className='subtitulo'>
            {props.subtitulo}
          </span>
        </div>

        <div className='modal-footer'>
          {props.children}
        </div>
      </div>
    </div>
  );
}