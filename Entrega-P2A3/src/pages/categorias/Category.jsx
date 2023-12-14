import { React,  useState, useEffect } from "react";
import Navbar from '../../components/Navbar';
import "../style.css";
import './category.css'
import Sidebar from "../../components/Sidebar";
import Title from "../../components/Title";
import Button from "../../components/forms/Button";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Card";
import axios from "axios";

const Category = () => {
    const navigate = useNavigate();

    const [jogos, setJogos] = useState(null);
    // Estado para armazenar o status da requisição (carregando, concluído, erro)
    const [statusRequisicao, setStatusRequisicao] = useState('carregando');
  
    useEffect(() => {
      // Função para realizar a requisição dos jogos
      const fetchJogo = async () => {
        try {
          // Realiza a requisição com Axios
          const resposta = await axios.get('http://localhost:5000/jogos');
          // Atualiza o estado dos jogos e do status da requisição
          setJogos(resposta.data);
          setStatusRequisicao('concluido');
        } catch (erro) {
          // Em caso de erro, atualiza o status da requisição para indicar o erro
          setStatusRequisicao('erro');
          console.error('Erro na requisição:', erro);
        }
      };
  
      // Chama a função de requisição ao montar o componente
      fetchJogo();
    }, []); // O array vazio [] como segundo argumento do useEffect faz com que ele seja executado apenas uma vez, equivalente ao componentDidMount
  
    // Renderiza o componente com base no status da requisição
    // if (statusRequisicao === 'carregando') {
    //   return <p>Carregando...</p>;
    // }
  
    // if (statusRequisicao === 'erro') {
    //   return <p>Ocorreu um erro na requisição.</p>;
    // }
   
  
    // Renderiza os jogos recebidos da API
    return (
        <div id="main">
        <Navbar/>
        <div className="contentAll">
            <Sidebar/>
            <div className="content">
                <Title title="Mais Jogados"/>
                <div className="content-category">
                    {(jogos && jogos.length > 0) && jogos.map((jogo) => (
                        <Card key={jogo.id} urlFoto={jogo.urlFoto} nomedoJogo={jogo.name} categoria={jogo.nota} plataforma={jogo.plataforma}/>
                    ))}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Category