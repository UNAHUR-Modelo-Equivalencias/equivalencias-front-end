import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import IniciarSesion from './components/IniciarSesion';
import UsuarioMisFormularios from './components/UsuarioMisFormularios';
import './index.css';

const App = () => {
  const [login, cambiarEstadoLogin] = useState(false);

  return (
    <>
      {login ? (
        <>
          <UsuarioMisFormularios />
        </>
      ) : (
        <>
          <IniciarSesion />
        </>
      )}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
