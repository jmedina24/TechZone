import React, { useState, useEffect } from 'react';
import Login from '../pages/Login'; // Asegúrate de que las rutas sean correctas
import SignUp from '../pages/SignUp';
import '../css/userWithoutLogin.css';

const UserWithoutLogin = () => {
  
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleLogin = (email, password) => {
    console.log('Login with: ', email, password);
    setShowLogin(false);
  };

  const handleRegister = (data) => {
    console.log('Register with: ', data);
    setShowRegister(false);
  };

  useEffect(() => {
    const handleOpenLogin = () => {
      setShowRegister(false);
      setShowLogin(true);
    };

    // Escucha evento personalizado (por ejemplo: window.dispatchEvent(new Event('open-login')))
    window.addEventListener('open-login', handleOpenLogin);

    // Limpieza
    return () => {
      window.removeEventListener('open-login', handleOpenLogin);
    };
  }, []);

  return (
    <>
      <div className="menu__container-user-info">
        <div className="menu__container-person">
          <div className="menu__person-logo">
            <i className="bi bi-person-circle"></i>
          </div>
          <div className="menu__container-person-text">
            <div className="menu__container-title">
              <div className="menu__title"><span>Bienvenido/a</span></div>
            </div>
            <div className="menu__container-description">
              <p className="menu__description">¡Inicia sesión en tu cuenta o crea una nueva!</p>
            </div>
            <div className="menu__container-btn">
              <button className="btn btn-primary w-100 mb-2" onClick={() => setShowLogin(true)}>Iniciar sesión</button>
              <button className="btn btn-outline-primary w-100 mb-2" onClick={() => setShowRegister(true)}>Crear cuenta</button>

              {showLogin && (
                <Login
                  show={showLogin}
                  handleClose={() => setShowLogin(false)}
                  handleLogin={handleLogin}
                  openRegister={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                  }}
                />
              )}

              {showRegister && (
                <SignUp
                  show={showRegister}
                  handleClose={() => setShowRegister(false)}
                  handleRegister={handleRegister}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserWithoutLogin;
