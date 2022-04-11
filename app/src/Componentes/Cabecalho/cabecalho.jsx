import React, {Component} from "react";
import cabecalho from "./cabecalho.css";
import Sobre from "../Sobre/sobre";

class Cabecalho extends Component {
  render() {
    return (
      <div className='container-cabecalho'>
        <div className='cabecalho'>
          <img className="cabecalho-imagem" src='./assets/img/money.png' />
          <span className='titulo-cabecalho'>App Envio de Dinheiro</span>
          <span className="titulo-sobre">Sobre</span>
        </div>
      </div>
    );
  }
}

export default Cabecalho;