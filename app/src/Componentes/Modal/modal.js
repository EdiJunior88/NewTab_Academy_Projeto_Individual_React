import React from "react";
import "./modal.css";

export function Modal(props) {
  return (
    <div className='container'>
      <div className='container-modal'>
        <button className='botao-fechar'>
          <img src='./assets/img/close-button.svg' alt='Fechar' onClick={props.fecharModal} />
        </button>

        <div className='container-modal-cabecalho'>
          <span className='titulo'>
            {props.titulo}
          </span>
          <span className='subtitulo'>
            {props.subtitulo}
          </span>
        </div>

        <div className='container-modal-corpo'>
          {props.corpo}
        </div>
      </div>
    </div>
  );
}