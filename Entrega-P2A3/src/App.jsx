import React from "react";
import Home from "./pages/Home";
import RoutesApp from "./pages/route/Routes";
import "./pages/cadastros/cadastro.css";
import "./pages/style.css";
import { AuthProvider } from "./pages/context/auth";

const App = () => {
    return (
        <AuthProvider>
            <RoutesApp/>
        </AuthProvider> 
    );
};

export default App;