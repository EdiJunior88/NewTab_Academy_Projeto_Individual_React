import React, { useState } from "react";
import axios from "axios";
import Usuario from "../usuario/DadoUsuario";
import "./ModalPagamento.css";
import NumberFormat from "react-number-format";
import { MascaraMonetaria } from "../mascaraMonetaria/MascaraMonetaria"


function ModalPagamento(props) {
  //Verifica o modalAberto para que o usuario 
  //possa fechar a janela clicando fora da área ou no botão "fechar"
  if(!props.modalAberto) {
    return null
  }

  let cards = [
	  // valid card
	  {
	    card_number: '1111111111111111',
	    cvv: 789,
	    expiry_date: '01/18',
	  },
	  // invalid card
	  {
	    card_number: '4111111111111234',
	    cvv: 123,
	    expiry_date: '01/20',
	  },
	];










  return (
    //onClick chamando a função onClose para fechar o className="modal"
    //onClick chamando o evento stopPropagation para parar o className="modal-content",
    //assim o onClick nunca será chamado de novo
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={evento => evento.stopPropagation()}>
        <div className="modal-header">
          <button 
            onClick={props.onClose} 
            className="button"
          >
            Fechar
          </button>
        </div>

        <div className="modal-body">
          <h4 className="modal-title">Modal</h4>
          <input onKeyUp={MascaraMonetaria} />
        </div>

        <div className="modal-footer">
          Isso é um conteúdo de um modal
        </div>
      </div>
    </div>
  )
}

export default ModalPagamento;