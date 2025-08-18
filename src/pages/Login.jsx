import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import Logo from '../images/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick() {
    if (password.length >= 4 && password.length <= 60) {
      navigate('/browse');
    }
  }

  return (
    <div className="div-login">
      <img src={Logo} alt='logo' id='logo'/>
      <div className="container-login">
        <div className="form-login">
          <h2 style={{ textAlign: "center" }}>Entrar</h2>
          <form>
            <input
              type="email"
              value={ email }
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email ou número de telefone"
              className='input-form'
            />
            <input
              type="password"
              value={ password }
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Senha"
              className='input-form'
            />
            <button
              type="button"
              className="button-login"
              onClick={ handleClick }
              id='button-enter'
            >
              Entrar
            </button>
          </form>
          <a href={`/browse`} id='button-enter-without' className="button-login">
              Entrar sem Login
            </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
