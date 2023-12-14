import {Fragment} from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import Login from "../cadastros/Login";
import Cadastro from "../cadastros/Cadastro";
import CrudJogo from '../cadastros/CrudJogo';
import CrudPlataforma from '../cadastros/CrudPlataforma'
import Category from '../categorias/Category'


const RoutesApp = () => {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
                <Route exact path="/home" element={<Home/>} />
                <Route exact path="/crudJogo" element={<CrudJogo/>} />
                <Route exact path="/crudPlataforma" element={<CrudPlataforma />} />
                <Route exact path="/category" element={<Category/>} />
                <Route path="/" element={<Login />} />
                <Route exact path="/cadastro" element={<Cadastro />} />
                <Route path="*" element={<Login />} />
            </Routes>
        </Fragment>
    </BrowserRouter>
  )
}

export default RoutesApp