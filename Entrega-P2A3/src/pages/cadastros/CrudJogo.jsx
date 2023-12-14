import React, { useState, useEffect } from 'react'
import Input from '../../components/forms/Input'
import Button from '../../components/forms/Button'
import TitleForm from '../../components/forms/TitleForm'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import { SelectCategory } from '../../components/forms/SelectCategory'
import SelectPlataforma from '../../components/forms/SelectPlataforma'
import SelectStatus from '../../components/forms/SelectStatus'
import SelectNota from '../../components/forms/SelectNota'
import axios from 'axios'





const CrudJogo = () => {
  const [jogo, setJogo] = useState([]);
    const navigate = useNavigate();

    const [statusRequisicao, setStatusRequisicao] = useState(null);
  
    const handleInputChange = (campo, valor) => {
      setJogo({
        ...jogo,
        [campo]: valor,

      });
      
    };
  
    // Função para lidar com o envio do formulário
    const handleEnviarFormulario = async () => {
      try {
        // Define o status da requisição como "enviando"
        setStatusRequisicao('enviando');
  
        // Realiza a requisição POST com Axios
        const resposta = await axios.post('http://localhost:5000/jogo', jogo);
  
        // Atualiza o estado do status da requisição para "concluído"
        setStatusRequisicao('concluido');
        
        // alert("Jogo cadastrado com sucesso!");
        // navigate("/Home");
  
        // Lida com a resposta da API, se necessário
        console.log('Resposta da API:', resposta.data);
      } catch (erro) {
        // Em caso de erro, atualiza o status da requisição para indicar o erro
        setStatusRequisicao('erro');
        console.error('Erro na requisição:', erro);
      }
    };

  return (
    <div id="divInicial">
    <Navbar/>
    <div id="divPrincipal">
        <TitleForm title="Cadastro de Jogo" subtitle="Cadastre um Jogo."/>
        <div id="divForm">
            <Input id="game-name" type="text" placeholder="Digite o Nome do Jogo"  value={jogo.name} onChange={(e) => handleInputChange('name', e.target.value)}/>
            <Input className='inputPadrao' type="text" placeholder="Coloque a URL de uma Foto do Jogo"  value={jogo.urlFoto} onChange={(e) => handleInputChange('urlFoto', e.target.value)}/>
            <SelectCategory value={jogo.categoria} onChange={(e) => handleInputChange('categoria', e.value)} />
            <SelectPlataforma value={jogo.plataforma} onChange={(e) => handleInputChange('plataforma', e.value)}/>
            <SelectStatus value={jogo.status} onChange={(e) => handleInputChange('status', e.value)}/>
            <SelectNota value={jogo.nota}onChange={(e) => handleInputChange('nota', e.value)}/>
           

            <Button id="enviar" Text="Cadastrar Jogo" onClick={handleEnviarFormulario} />
        </div>
    </div>
      {statusRequisicao && (
        <p>Status da Requisição: {statusRequisicao}</p>
      )}
    </div>
  )
}

export default CrudJogo