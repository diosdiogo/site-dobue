import React, { Component } from "react";
import './style.css';

import { PageRepServices } from "../../services/services";
import { RepresentantesServices } from "../../services/services";


class Representantes extends Component {
    state = {
        representantes: [
            {
                rota: '',
                representante: ''
            }
        ],
        pagRep:{
            titulo: '',
            descricao: ''
        },
        mapaRepesentante: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3663.916004405069!2d-51.557155485549586!3d-23.31880615856341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecb058572434ff%3A0xa67a672feeeb754a!2sAv.%20Pres.%20Campos%20S%C3%A1les%2C%2045%20-%20Industrial%20Novo%2C%20Sab%C3%A1udia%20-%20PR%2C%2086720-000!5e0!3m2!1spt-BR!2sbr!4v1620981495304!5m2!1spt-BR!2sbr'
    }

    async componentDidMount(){
        window.scrollTo(0,0);

        const representantes = await RepresentantesServices();
        const pageRep = await PageRepServices();
    
        this.setState({
            representantes:[...representantes],
            pagRep: {...pageRep}
        })
    }

    handleChange = (event) => {
        this.setState({ mapaRepesentante: event.target.value });
    };

    render(){
        const dados : any = this.state;
        return (
            <>
               <div style={{ backgroundColor: '#F3F3F3' }}>
                    <div className="container">
                        <div className="row text-center">
                            <div className="col">
                                <h1 className="font-header">{ dados.pagRep.titulo  }</h1>
                                <span>{ dados.pagRep.descricao }</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- -------------------------------------------------//
                    // Formulário de contato e mapa                       //
                    //--------------------------------------------------- --> */}

                    <div className="card-mapa">
                        <div className="map">
                            <iframe 
                                src={dados.mapaRepesentante}
                                className="map-contato" style={{ border:'0', zIndex:'999'}} title="map1 " allowFullScreen  loading="lazy" />
                        </div>
                        <div className="map-form">
                            <label className="label-representante">BUSQUE UM REPRESENTANTE: </label>

                            <select className="form-control mb-6 select-representante" value={dados.mapaRepesentante} onChange={this.handleChange}>
                                <option value="" disabled> -- REPRESENTANTES --</option>
                                {
                                    dados.representantes.map((item, index) => (
                                        <option value={ item.maps }className="select-representante" style= {{ textTransform: 'uppercase' }}>{ item.nome }</option>
                                    ))
                                }
                            </select>

                            <div className="map-card-select">
                                <iframe 
                                    src={ dados.mapaRepesentante } 
                                    className="map-contato" style={{ border:'0', zIndex:'999' }} title="map2" allowFullScreen loading="lazy"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Representantes;
