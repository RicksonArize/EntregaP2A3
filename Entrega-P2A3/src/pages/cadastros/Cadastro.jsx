import React, { useState } from 'react';
import Input from '../../components/forms/Input';
import Button from '../../components/forms/Button';
import TitleForm from '../../components/forms/TitleForm';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../../components/Navbar';

const Cadastro = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async () => {
    if (!name || !email || !senha) {
      setError('Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/register', { name ,email, senha });

      if (response.data.success) {
        alert('Usuário cadastrado com sucesso!');
        navigate('/');
      } else {
        setError('Erro ao cadastrar usuário. Verifique os dados fornecidos.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Erro ao cadastrar usuário. Tente novamente mais tarde.');
    }
  };

  return (
    <div id="divInicial">
      <Navbar />
      <div id="divPrincipal">
        <TitleForm title="Cadastre-se" subtitle="É rápido e fácil." />
        <div id="divForm">
          <Input
            className="inputPadrao"
            type="text"
            value={name}
            placeholder="Digite seu Nome"
            onChange={(e) => [setName(e.target.value), setError('')]}
          />
          <Input
            className="inputPadrao"
            type="text"
            value={email}
            placeholder="Digite seu E-mail"
            onChange={(e) => [setEmail(e.target.value), setError('')]}
          />
          <Input
            id="password"
            type="password"
            value={senha}
            placeholder="Digite uma Senha"
            onChange={(e) => [setSenha(e.target.value), setError('')]}
          />
          <div>{error}</div>
          <div className="cadastro">
            <p>
              Já tem uma conta? <Link to="/">Entre</Link>
            </p>
          </div>

          <Button id="enviar" Text="Inscrever-se" onClick={handleCadastro} />
        </div>
      </div>
    </div>
  );
};

export default Cadastro;
