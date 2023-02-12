import React, { Component } from "react";
import "./cabecalho.css";
import logo from "../../Imagens/money.png"

class Cabecalho extends Component {
  render() {
    return (
      <div className='container-cabecalho'>
        <div className='cabecalho'>
          <img
            className='cabecalho-imagem'
            src={logo}
            alt='cabeçalho imagem'
          />
          <span className='titulo-cabecalho'>App Envio de Dinheiro</span>
        </div>
      </div>
    );
  }
}

export default Cabecalho;
