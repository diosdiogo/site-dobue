import React, { Component } from "react";
import './style.css';

import { PageDownloadServices } from "../../services/services";
import { DownloadServices } from "../../services/services";

const img = require("../../assets/pdf_icon.png");

class Download extends Component {
    state = {
        download:[],
        paginaD:{
            titulo: '',
            descricao: ''
        }
    }

    async componentDidMount(){
        window.scrollTo(0,0);

        const download = await DownloadServices();
        const paginaD = await PageDownloadServices();
    
        this.setState({
            download: [...download],
            paginaD: {...paginaD}
        })
    }

    render(){
        const dados : any = this.state;


        return (
            <>
                <div style={{ backgroundColor: '#F3F3F3' }}>
                    <div className="container pb-5 pag-downloa">
                        {/* <!---------------------------------------------------//
                        //          titulo pagina                             //
                        ----------------------------------------------------> */}

                        <div className="row text-center" style={{ marginTop: '15px' }}>
                            <div className="col">
                                <h1 className="font-header">{ dados.paginaD.titulo }</h1>
                                <span>{ dados.paginaD.descricao }</span>
                            </div>
                        </div>

                        {/* <!---------------------------------------------------//
                        //          Lista titulo                            //
                        -------------------------------------------------- --> */}

                        <table className="table table-striped" style={{ marginTop: '25px' }}>
                            <tbody>
                                {
                                    dados.download.map((item, index) => (
                                        <tr key={index}>
                                            <td>{ item.nome }</td>
                                            <td><img src={img} width="50" style={{ margin: '0 auto' }} alt="" /></td>
                                            <td><a href={ item.arquivo } target="_blank" download> Baixar </a></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }
}

export default Download;
