import React from "react";
import axios from "axios";
import "./ModalPagamento.css";

const ModalPagamento = props => {
  if(!props.modalAberto) {
    return null
  }


  return (
    //onClick chamando a função onClose para fechar o className="modal"
    //onClick chamando o evento stopPropagation para parar o className="modal-content",
    //assim o onClick nunca será chamado de novo
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={evento => evento.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">Modal Title</h4>
        </div>

        <div className="modal-body">
          Isso é um conteúdo de um modal
        </div>

        <div className="modal-footer">
          <button onClick={props.onClose} className="button">Close</button>
        </div>
      </div>
    </div>
  )
}

export default ModalPagamento;