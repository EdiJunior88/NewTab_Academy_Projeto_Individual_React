import PropTypes from "prop-types";
import "./modal.css";
import Fechar from "../../Imagens/close-window.webp";

export function Modal({ fecharModal, titulo, subtitulo, children }) {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-header'>
          <button className='header-botao'>
            <img
              className='botao-png'
              src={Fechar}
              alt='Fechar'
              onClick={fecharModal}
              width='36px'
              height='36px'
            />
          </button>
        </div>

        <div className='modal-body'>
          <span className='titulo'>{titulo}</span>
          <span className='subtitulo'>{subtitulo}</span>
        </div>

        <div className='modal-footer'>{children}</div>
      </div>
    </div>
  );
}

//recomenda-se geralmente a utilização de propTypes
//para uma melhor verificação dos tipos
//e para evitar potenciais erros no seu código
Modal.propTypes = {
  fecharModal: PropTypes.func,
  titulo: PropTypes.string,
  subtitulo: PropTypes.string,
  children: PropTypes.node,
};
