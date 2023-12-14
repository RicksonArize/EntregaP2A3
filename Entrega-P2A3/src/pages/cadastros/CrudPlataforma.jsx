import React, { useState } from 'react'
import Input from '../../components/forms/Input'
import Button from '../../components/forms/Button'
import TitleForm from '../../components/forms/TitleForm'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Navbar from '../../components/Navbar'
import axios from 'axios'

const CrudPlataforma = () => {
    const [dadosEnvio, setDadosEnvio] = useState([]);
    
      const [statusRequisicao, setStatusRequisicao] = useState(null);
    
      const handleEnviarFormulario = async () => {
        try {
          setStatusRequisicao('enviando');
    
          const resposta = await axios.post('http://localhost:5000/plataforma', dadosEnvio);
    
          setStatusRequisicao('concluido');
    
          console.log('Resposta da API:', resposta.data);
        } catch (erro) {
          setStatusRequisicao('erro');
          console.error('Erro na requisição:', erro);
        }
      };
    
      return (
        
    <div id="divInicial">
      <Navbar/>
      <div id="divPrincipal">
          <TitleForm title="Cadastro de Plataforma" subtitle="Cadastre uma Plataforma."/>
          <div id="divForm">
              <Input ClassName="inputPadrao" type="text" placeholder="Digite o nome da Plataforma"   value={dadosEnvio.nomePlataforma}
                  onChange={(e) =>
                    setDadosEnvio({ ...dadosEnvio, nomePlataforma: e.target.value })
                  }/>
              <Input className="inputPadrao" type="url" placeholder="Digite a URL"    value={dadosEnvio.urlPlataforma}
                  onChange={(e) =>
                    setDadosEnvio({ ...dadosEnvio, urlPlataforma: e.target.value })
                  }/>
              <Button id="enviar" Text="Cadastrar" onClick={handleEnviarFormulario} />
          </div>
      </div>
      {statusRequisicao && (
        <p>Status da Requisição: {statusRequisicao}</p>
      )}
    </div>
  );
}

export default CrudPlataforma