import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
    
  return (
        <div className="menuALL-lateral">
            <div className="menu-lateral-bottom">       
                <div className="menu-lateral-div-ul">
                    <div className="menu-title"><font>RECOMENDAÇÕES</font></div>
                    <ul className="">
                        <li className="menu-lateral-list"><a onClick={() => [navigate("/home")]} >Destaques</a></li>
                        <li className="menu-lateral-list"><a onClick={() => [navigate("/category")]}>Mais Jogados</a></li>
                        <li className="menu-lateral-list"><a href="#">Bem Avaliados</a></li>

                    </ul>
                    <div className="menu-title"><font>CATEGORIAS</font></div>
                    <ul className="">
                        <li className="menu-lateral-list"><a href="#">Aventura</a></li>
                        <li className="menu-lateral-list"><a href="#">Indie</a></li>
                        <li className="menu-lateral-list"><a href="#">Casual</a></li>
                        <li className="menu-lateral-list"><a href="#">FPS</a></li>
                        <li className="menu-lateral-list"><a href="#">Estratégia</a></li>
                        <li className="menu-lateral-list"><a href="#">RPG</a></li>

                    </ul>
                </div>
            </div>
        </div>
  )
}

export default Sidebar