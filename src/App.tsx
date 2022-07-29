import React, { Component } from "react";
import Routes from "./routers";
//import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Menu from './components/menu'
import Rodape from './components/rodape'

import { MenuServices } from "./services/services";
import { ContatoServices } from "./services/services";
import { SocialServices } from "./services/services";
import { ModuloServices } from "./services/services";

class App extends Component{
  state = {
    menu:{
        modulo1: '',
        modulo2: '',
        modulo3: '',
        modulo4: '',
        modulo5: '',
        modulo6: '',
        modulo7: ''
    },
    contato:{
        telefone_principal:'',
        email_principal: ''
    },
    social:[
        {social_url:''},
        {social_url:''}
    ],
    modulo:{
        modulo_aparencia_logo:''
    }
  }
  async componentDidMount(){
    const menu = await MenuServices();
    const social = await SocialServices();
    const contato = await ContatoServices();
    const modulo = await ModuloServices();

    this.setState({
        menu: {...menu},
        contato:{...contato},
        social:[...social],
        modulo:{...modulo}
    })
  }

  render(){
    return(
      <>
        <Menu menu={this.state.menu} contato={this.state.contato} modulo={this.state.modulo} social={this.state.social} />
        <Routes />
        <Rodape menu={this.state.menu} contato={this.state.contato} modulo={this.state.modulo} social={this.state.social} />
      </>
    )
  }    
} 

export default App;
