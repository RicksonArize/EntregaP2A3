import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import TitleForm from '../../components/forms/TitleForm';
import Button from '../../components/forms/Button';
import Input from '../../components/forms/Input';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !senha) {
      setError('Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, senha });

      if (response.data.success) {
        // Successful login, redirect to home
        navigate('/home');
      } else {
        setError('Credenciais inválidas. Verifique seu e-mail e senha.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      setError('Erro ao fazer login. Verifique suas credenciais.');
    }
  };

  return (
    <div id="divInicial">
      <Navbar />
      <div id="divPrincipal">
        <TitleForm title="Login" subtitle="Logue sua conta." />
        <div id="divForm">
          <Input
            id="user-enter"
            type="text"
            value={email}
            placeholder="E-mail"
            onChange={(e) => [setEmail(e.target.value), setError('')]}
          />
          <Input
            id="password"
            type="password"
            value={senha}
            placeholder="Senha"
            onChange={(e) => [setSenha(e.target.value), setError('')]}
          />
          <div>{error}</div>
          <div className="cadastro">
            <p>
              Primeira vez? <Link to="/cadastro">Cadastre-se</Link>
            </p>
          </div>

          <Button id="enviar" Text="Entrar" onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
};

export default Login;
