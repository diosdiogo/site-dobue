import React, { Component } from "react";
import './style.css';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagranmIcon from '@material-ui/icons/Instagram'
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';

interface Props {
    menu: any,
    contato: any,
    social: any,
    modulo: any
}

class Rodape extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {...props}
    }
    
    static getDerivedStateFromProps(props, state) {
        return {...props}
    }
    
    render(){
        const dados : any = this.state;
        return (
            <>
                <div className="rodape">
                    <div className="desktop">
                        <div className="rodape-1">
                            <div className="container">
                                <div className="row align-center">
                                    {/* <!---------------------------------------------------//
                                    //          Informações de contato rodapé           //
                                    ----------------------------------------------------> */}

                                    <div className="col-md-4" style={{alignSelf: 'center'}}>
                                        <div className="row contato">
                                            <div className="col-md-1"></div>
                                            <div className="col"><span className="rodape-info">{ dados.contato.endereco }</span></div>
                                        </div>
                                        <div className="row contato">
                                            <div className="col info-contato">
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <EmailIcon className="fas fa-envelope" style={{ marginTop: `15px`, fontSize: `25px`, marginRight: `10px` }} />
                                                    </div>
                                                    <div className="col">
                                                        <span className="rodape-info">{ dados.contato.email_principal }  <br /> { dados.contato.email_secundario }</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row contato">
                                            <div className="col info-contato">
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <LocalPhoneIcon className="icon-contato" />
                                                    </div>
                                                    <div className="col">
                                                        <span className="rodape-info">{ dados.contato.telefone_principal }</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!---------------------------------------------------//
                                    //                     Logo rodapé                  //
                                    ----------------------------------------------------> */}
                                    <div className="col-md-4 text-center">
                                        <img src={ dados.modulo.modulo_aparencia_rodape } alt="" className="logo-rodape" />
                                    </div>

                                    {/* <!---------------------------------------------------//
                                    //          redes social rodapé                      //
                                    ----------------------------------------------------> */}

                                    <div className="col-md-4" style={{ alignSelf: 'center' }}>
                                        <div className="row text-right">
                                            <div className="col">
                                                <a href={ dados.social[0].social_url } className="link-rede-social">
                                                    <FacebookIcon style={{ marginRight: '5px', color: '#fff' }} className="icon" />
                                                    <span style={{marginRight:'39px', color: '#fff'}}> Dobue Movelaria </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row text-right">
                                            <div className="col">
                                                <a href= { dados.social[1].social_url } className="link-rede-social">
                                                    <InstagranmIcon style={{ marginRight:'5px', color: '#fff'}} className="icon" />
                                                    <span style={{ marginRight: '18px', color: '#fff'}}>  @dobue_movelaria </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="mobile">
                    <div>
                        <div className="rodape-1">
                            <div className="container">
                                <div className="row align-center">
                                    {/* <!---------------------------------------------------//
                                    //          Informações de contato rodapé           //
                                    ----------------------------------------------------> */}

                                    <div className="col-6">
                                        <div className="row contato">
                                            <div className="col">
                                                <span className="rodape-info">{ dados.contato.endereco }</span>
                                            </div>
                                        </div>
                                        <div className="row contato">
                                            <div className="col info-contato">
                                                <div className="row">
                                                    <div className="col"> 
                                                        <EmailIcon className="fas fa-envelope" style={{marginTop: '15px', fontSize: '25px', marginRight: '10px'}} />
                                                        <span className="rodape-info">{ dados.contato.email_principal }  <br /> { dados.contato.email_secundario }</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row contato">
                                            <div className="col info-contato">
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <i className="fas fa-phone-alt icon-contato"></i>
                                                    </div>
                                                    <div className="col">
                                                        <span className="rodape-info">{ dados.contato.telefone_principal }</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!---------------------------------------------------//
                                    //                     Logo rodapé                  //
                                    ----------------------------------------------------> */}
                                    <div className="col-6">
                                        <img src={ dados.modulo.modulo_aparencia_rodape } alt="" className="logo-rodape" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!---------------------------------------------------//
                //          Direitos reservados                      //
                ----------------------------------------------------> */}

                <div className="rodape-2">
                    <div className="contaier">
                        <div className="row">
                            <div className="col">
                                <span>Dodue Movelaria © 2021 | Todos os direitos reservados</span>
                            </div>
                            <div className="col" style={{textAlign: 'end'}}>
                                <span>Desenvolvido por Arte Visual Soft</span>
                            </div>
                        </div>
                    </div>
                </div>
            </>
    
        )
    }
}

export default Rodape;
