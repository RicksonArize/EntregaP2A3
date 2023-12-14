import React from 'react'
import account from '../image/account.png'
import logo from '../image/GameToShare.png'
import Button from './forms/Button';
import { Link, useNavigate } from 'react-router-dom';
import '../pages/style.css'

window.onload=function(){
    document.querySelector(".hamburger").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

  }


const Navbar = () => {
    const navigate = useNavigate();

    return (
            <div id="top">
                <div className="top-logo">
                <a onClick={() => [navigate("/home")]} ><img src={logo} alt="logo"/></a>          
                </div>
                <div className="container">

                    <div className="hamburger">
                        <div className="line" id="line1"></div>
                        <div className="line" id="line2"></div>
                        <div className="line" id="line3"></div>
                    </div>
                    
                    <aside className="sidebar">
                        <nav className="menu">
                            <div className="top-hamburguer">
                                <div className="top-user-icon-hamburguer">
                                    <a href="login.html"><img className="user-icon-hamburguer" src={account}/></a>
                                </div>
                                <div className="row-midle"></div>
                                <div className="top-user-name-hamburguer">
                                    <font className="user-name-hamburguer">Nome</font>
                                    <font className="user-lastName-hamburguer">Sobrenome</font>
                                </div>
                            </div>
                            <div>
                                <ul >
                                    <div className="menu-title"><font>RECOMENDAÇÕES</font></div>
                                    <li className="menu-item"><a className="menu-link" onClick={() => [navigate("/home")]} >Destaques</a></li>
                                    <li className="menu-item"><a className="menu-link" onClick={() => [navigate("/category")]}>Mais Jogados</a></li>
                                    <li className="menu-item"><a href="#" className="menu-link">Bem Avaliados</a></li>
                                    <div className="menu-title"><font>MENU</font></div>
                                    <li className="menu-item"><a className="menu-link" onClick={() => [navigate("/crudJogo")]}>Cadastrar Jogo</a></li>
                                    <li className="menu-item"><a className="menu-link" onClick={() => [navigate("/crudPlataforma")]}>Cadastrar Plataforma</a></li>
                                    {/* <li className="menu-item"><a href="#" className="menu-link">Biblioteca</a></li> */}
                                </ul>
                            </div>
                        </nav>
                    </aside>
                </div>
                <div className="top-user">
                    <div className="top-menu">
                        <ul className="top-menu-list">
                            <li> <a onClick={() => [navigate("/crudJogo")]}>Cadastrar Jogo</a></li>
                            <li><a onClick={() => [navigate("/crudPlataforma")]}>Cadastrar Plataforma</a></li>
                            {/* <li><a>Biblioteca</a></li> */}
                        </ul>
                    </div>
                        <div className="row-midle"></div>
                        <a>
                            <div className="top-user-icon">
                                <img className="user-icon" src={account}/>
                            </div>
                        </a>
                </div>

            </div>
    );
}

export default Navbar