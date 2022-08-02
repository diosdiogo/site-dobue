import React, { Component } from "react";
import './style.css';

import { GrupoServices } from "../../services/services";
import { PageProdutoServices } from "../../services/services";
import { ProdutoByGrupoServices } from "../../services/services";

import ModalProduto from "../../components/modals/produto";

class Produto extends Component {
    state = {
        pagina:{
            titulo: '',
            descricao: ''
        },
        group: [
            {
                grupo_descricao: '',
                grupo_image: ''
            }
        ],
        produto: [
            {
                id: '',
                produto: '',
                descricao: '',
                dimensoes: '',
                materiais: null,
                embalagem: '',
                img: '',
                cores:''
            }
        ],
        grupo_id: 0,
        show: false
    }

    async componentDidMount(){
        window.scrollTo(0,0);

        const pagina = await PageProdutoServices();
        const grupo = await GrupoServices();
    
        this.setState({
            pagina:{...pagina},
            group: [...grupo]
        })
    }

    async handleShow(e){
        const ProdutoByGrupo = await ProdutoByGrupoServices(e);
        this.setState({
            produto: [...ProdutoByGrupo]
        })
        
        console.log(this.state)
        this.setState((state) => ({
            show: true
        }));
    }

    async handleClose() {
        console.log("entrou")
        this.setState((state) => ({
            show: false
        }));
    }
    render(){
        const dados : any = this.state;
        const handleChande = () => {
            this.handleClose();
        }
        return (
            <>
              <div style={{ backgroundColor:'#F3F3F3', marginTop: '15px' }}>
                <div className="container pb-5">
                    <div className="row text-center" style={{ marginTop: '15px' }}>
                        <div className="col">
                            <h1 className="font-header">{ dados.pagina.titulo }</h1>
                            <span>{ dados.pagina.descricao }</span>
                        </div>
                    </div>

                    <div className="card-subgrupo" style={{ marginTop: '15px', marginBottom: '15px' }}>
                        {
                            dados.group.map((i, index) => (
                                <div className="painel-subgrupo col-6" key={index}>
                                    <div className="card text-white card-grupo card-click" onClick={() => this.handleShow(i.grupo_id)}>
                                        <img src={ i.grupo_image } data-sizes="auto" className="card-img" alt="Card Image"/>
                                        <div className="card-img-overlay">
                                            <div className="descricao-subgrupo">
                                                <span className="text-descricao-subgrupo">{ i.grupo_descricao }</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
              </div>
              <ModalProduto grupo_id={dados.grupo_id} show={dados.show} produto={dados.produto} onHide={handleChande}/>
            </>
        )
    }
}

export default Produto;
