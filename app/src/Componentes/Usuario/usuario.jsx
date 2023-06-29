import PropTypes from "prop-types";

export function Usuario({ usuarioImagem, name, username, id, onClick }) {
  return (
    <div className='container-lista-usuario'>
      <div className='lista-usuario'>
        <img
          className='lista-usuario-img'
          src={usuarioImagem}
          alt={name}
          width='128px'
          height='128px'
        />
        <div className='usuario-perfil'>
          <h4>{name}</h4>

          <h4>
            ID: {id} - Username: {username}
          </h4>
        </div>
      </div>

      <div className='botao'>
        <button onClick={onClick}>Pagar</button>
      </div>
    </div>
  );
}

//recomenda-se geralmente a utilização de propTypes
//para uma melhor verificação dos tipos
//e para evitar potenciais erros no seu código
Usuario.propTypes = {
  usuarioImagem: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  id: PropTypes.number,
  onClick: PropTypes.func,
};
