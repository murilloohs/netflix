import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

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
    <div className="container-login">
      <div className="login">
        <form>
          <input
            type="email"
            value={ email }
            name="email"
            onChange={setEmail}
            placeholder="Email ou número de telefone"
          />
          <input
            type="text"
            value={ password }
            onChange={setPassword}
            name="password"
            placeholder="Senha"
          />
          <button
            type="button"
            className="button-login"
            onClick={ handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
