import React, { Component } from "react";
import './style.css';

import { ClienteServices } from "../../services/services";
import { PageClienteServices } from "../../services/services";


class Cliente extends Component {
    state = {
        cliente: [
            {
                src: '',
                alt: ''
            }
        ],
        paginaC:{
            titulo: '',
            descricao: ''
        }
    }

    async componentDidMount(){
        window.scrollTo(0,0);

        const cliente = await ClienteServices();
        const paginaC = await PageClienteServices();
    
        this.setState({
            cliente:[...cliente],
            paginaC: {...paginaC}
        })
    }

    render(){
        const dados : any = this.state;
        return (
            <>
                <div style={{ backgroundColor:'#F3F3F3' }}>
                    <div className="container pb-5">
                        
                        {/* <!---------------------------------------------------//
                        //          História                                //
                        ----------------------------------------------------> */}

                        <div className="row text-center" style={{ marginTop: '15px' }}>
                            <div className="col">
                                <h1 className="font-header">{ dados.paginaC.titulo }</h1>
                                <span>{ dados.paginaC.descricao }</span>
                            </div>
                        </div>
                        <div className="row" style={{ marginTop: '30px', marginBottom: '30px' }}>
                            {
                                dados.cliente.map((item, index) => (
                                    <div className="col-4" key={index} style={{ alignSelf: 'center' }}>
                                        <img src={ item.logo } alt={ item.nome } className="image-cliente" />
                                    </div>
                                ))
                            }
                           
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Cliente;
