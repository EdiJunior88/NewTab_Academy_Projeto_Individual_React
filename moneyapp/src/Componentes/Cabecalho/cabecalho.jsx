import { Component } from "react";
import "./cabecalho.css";
import logo from "../../Imagens/money.webp"

class Cabecalho extends Component {
  render() {
    return (
      <div className='container-cabecalho'>
        <div className='cabecalho'>
          <img
            className='cabecalho-imagem'
            src={logo}
            alt='cabeçalho imagem'
            width="100px"
            height="100px"
          />
          <span className='titulo-cabecalho'>App Envio de Dinheiro</span>
        </div>
      </div>
    );
  }
}

export default Cabecalho;
