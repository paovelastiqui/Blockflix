// LoginForm.js
import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin, onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmEmail, setConfirmEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleLogin = () => {
    // Aquí puedes manejar la lógica de autenticación
    onLogin(username, password);
  };

  const handleRegister = () => {
    // Aquí puedes manejar la lógica de registro
    onRegister(username, password, email);
  };

  return (
    <div className="login-form-container">
      <h2>{isLogin ? 'Login' : 'Registro'}</h2>
      <input
        type="text"
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {!isLogin && (
        <>
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="email"
            placeholder="Correo Electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="email"
            placeholder="Confirmar Correo Electrónico"
            value={confirmEmail}
            onChange={(e) => setConfirmEmail(e.target.value)}
          />
        </>
      )}
      <button onClick={isLogin ? handleLogin : handleRegister}>
        {isLogin ? 'Iniciar sesión' : 'Registrarse'}
      </button>
      <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
      </p>
    </div>
  );
};

export default Login;
