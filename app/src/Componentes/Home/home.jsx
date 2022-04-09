import React, { useState, useEffect } from 'react';
import { Modal } from '../Modal/modal';
import { Usuario } from '../Usuario/usuario';

export function Home(props) {
  const [usuario, setUsuario] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [pagamento, setPagamento] = useState(null);
  const [pagamentoSucesso, setPagamentoSucesso] = useState(false);
  const [pagamentoErro, setPagamentoErro] = useState(false);

  return (
    <>
      {
        <h1>Teste</h1>
      }
    </>
  );
}