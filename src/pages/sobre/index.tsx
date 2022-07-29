import React, { Component } from "react";
import './style.css';

import { InstitucionalServices } from "../../services/services";


class Sobre extends Component {
    state = {
        sobre: {
            titulo_historia: '',
            descricao_historia: '',
            imagem_video: '',
            titulo_missao: '',
            descricao_missao: '',
            titulo_visao: '',
            descricao_visao: '',
            titulo_valores: '',
            descricao_valores: ''
        },
    }

    async componentDidMount(){
        window.scrollTo(0,0);

        const sobre = await InstitucionalServices();
    
        this.setState({
            sobre:{...sobre}
        })
    }

    render(){
        const dados : any = this.state;
        return (
            <>
                <div style={{backgroundColor:'#F3F3F3', marginTop:'15px'}}>
                    <div className="container pb-5">
                        {/* <!---------------------------------------------------//
                        //          História                                //
                        -------------------------------------------------- --> */}

                        <div className="row text-center">
                            <div className="col">
                                <h1 className="font-header">{ dados.sobre.titulo_historia }</h1>
                            </div>
                        </div>
                        <div className="row sobre-missao">
                            <div className="col text-sobre">
                                <span>
                                    { dados.sobre.descricao_historia }
                                </span>
                            </div>
                            <div className="col">
                                <img src={ dados.sobre.imagem_video } alt="Dobue" className="b-dobue float-right" />
                            </div>
                        </div>

                        {/*                         
                        <!-- -------------------------------------------------//
                        //          Missão visão valores                    //
                        //------------------------------------------------ --> */}
                        
                        <div className="row sobre-card-dobue">
                            <div className="col">
                                <div className="card card-sobre">
                                    <div className="card-body">
                                        <h5 className="card-title">{ dados.sobre.titulo_missao }</h5>
                                        <p className="card-text">{ dados.sobre.descricao_missao }</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card card-sobre">
                                    <div className="card-body">
                                        <h5 className="card-title">{ dados.sobre.titulo_visao }</h5>
                                        <p className="card-text"> { dados.sobre.descricao_visao }</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col">
                                <div className="card card-sobre">
                                    <div className="card-body">
                                        <h5 className="card-title">{ dados.sobre.titulo_valores }</h5>
                                        <p className="card-text">{ dados.sobre.descricao_visao }</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default Sobre;
