import React from "react";
import Navbar from '../components/Navbar';
import "./style.css";
import Sidebar from "../components/Sidebar";
import SlideContent from "../components/SlideContent";
import Title from "../components/Title";
import Button from "../components/forms/Button";
import { useNavigate } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const Home = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    return (
        <div id="main">
        <Button id="button-logout" Text="Sair" onClick={() => [logout(), navigate("/")]}/>
        <Navbar/>
        <div className="contentAll">
            <Sidebar/>
            <div className="content">
                <Title title="Destaques"/>
                <SlideContent/>
            </div>
        </div>
        </div>
    )
}

export default Home
