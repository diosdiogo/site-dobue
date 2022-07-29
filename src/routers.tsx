import React from "react";
import { Router, Route } from "react-router-dom";
import history from './util/history'

import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Cliente from "./pages/cliente";
import Representantes from "./pages/representantes";
import Contato from "./pages/contato";
import Download from "./pages/donwload";
import Produto from "./pages/produto";

const Rotas = () => {
    return (
        <Router history={history}>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/sobre" component={ Sobre }/>
            <Route exact path="/clientes" component={ Cliente }/>
            <Route exact path="/representante" component={ Representantes }/>
            <Route exact path="/contato" component={ Contato }/>
            <Route exact path="/download" component={ Download }/>
            <Route exact path="/produto" component={ Produto }/>
        </Router>
    )
};

export default Rotas;
