import React, { Component } from "react";
import './styles.css';
import history from '../../util/history';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagranmIcon from '@material-ui/icons/Instagram'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import EmailIcon from '@material-ui/icons/Email';


interface Props {
    menu: any,
    contato: any,
    social: any,
    modulo: any
}

class Menu extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {...props}
    }
    
    static getDerivedStateFromProps(props, state) {
        return {...props}
    }
    async componentDidMount(){
        
    }

    render(){
        const handleNavigate = async (e) => {
            try{ 
              history.push(e)
            }catch(error){
                console.log(error)
            }
        }

        const dados : any = this.state;
        return (
            <>
            <nav className="navbar toolbar navbar-light">
                <div className="container content-toobar">
                    <div style={{width: "429px"}}>
                        <span style={{marginRight: '8%'}}> 
                         <LocalPhoneIcon className="icon" /> { dados.contato.telefone_principal } 
                        </span>

                        <span className="header-fone">
                            <AccessTimeIcon className="icon" /> Seg - Sex: 07:45 – 12:00 | 13:15 – 17:45 
                        </span>
                    </div>
                    
                    <span className="ml-5"></span>

                    <div className="social-toobar">
                        <EmailIcon className="icon" />
                        <span style={{marginRight: '15px'}}> { dados.contato.email_principal }
                        </span>
                            <a onClick={() => handleNavigate('/')}className="link-rede-social">
                                <FacebookIcon style={{marginRight: '15px'}} />
                            </a>
                            <a href={ dados.social[1].social_url } className="link-rede-social">
                                <InstagranmIcon className="icon"/>
                            </a>
                    </div>
                </div>
            </nav>

            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <img src={ dados.modulo.modulo_aparencia_logo } alt="Logo-Dobue" className="logo-dobue" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-item nav-link" onClick={() => handleNavigate('/')}>{ dados.menu.modulo1 }</a>
                            <a className="nav-item nav-link" onClick={() => handleNavigate('/sobre')}>{ dados.menu.modulo2 }</a>
                            <a className="nav-item nav-link" onClick={() => handleNavigate('/produto')}>{ dados.menu.modulo3 }</a>
                            <a className="nav-item nav-link" onClick={() => handleNavigate('/clientes')}>{ dados.menu.modulo4 }</a>
                            <a className="nav-item nav-link" onClick={() => handleNavigate('/representante')}>{ dados.menu.modulo5 }</a>
                            <a className="nav-item nav-link" onClick={() => handleNavigate('/contato')}>{ dados.menu.modulo6 }</a>
                            <a className="nav-item nav-link" onClick={() => handleNavigate('/download')}>{ dados.menu.modulo7 }</a>
                        </div>
                    </div>
                </nav>
            </div>
            </>
    
        )
    }
}

export default Menu;
