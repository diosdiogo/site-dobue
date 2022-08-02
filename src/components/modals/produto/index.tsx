import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal';
import './styles.css';

interface Produto {
    id: any,
    produto: any,
    descricao: any,
    dimensoes: any,
    materiais: any,
    embalagem: any,
    img: any,
    cores: any
 }

export interface IRef {
    handleClose: () => void;
}
interface Props {
   grupo_id: any,
   show: boolean,
   produto: Produto,
   onHide: any
}
class ModalProduto extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {...props, index: 0}
        this.handleSelect = this.handleSelect.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return {...props}
    }

    async componentDidMount(){
        console.log(this.state)
        window.scrollTo(0,0);
    }

    
    
    handleSelect(selectedIndex, e) {
        this.setState({index: selectedIndex});
    }
    render(){
        const dados : any = this.state;
        return (
            <>
            <Modal
                show={dados.show}
                onHide={dados.onHide.bind(this)}
                id="modalProduto"
            >
                <Modal.Header closeButton />
                <Modal.Body>
                    <div>
                        <div className="deck">
                            <div className="card">
                                <Carousel activeIndex={dados.index} onSelect={this.handleSelect} indicators={false} interval={1000000}>
                                    {dados.produto.map((item, index) => (
                                        <Carousel.Item key={index} >
                                            <img src={ item.img } className="d-block w-100 image-carrocel card-img-top" data-sizes="auto" loading="lazy" alt={ item.produto } />
                                        </Carousel.Item>
                    
                                    ) )}
                                </Carousel>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h3 style={{ color: '#fff'}}>Descrição</h3>
                                        <span style={{color: '#fff'}}>{ dados.produto[dados.index].descricao }</span>
                                        { dados.produto[dados.index].materiais
                                            ? (
                                                <>
                                                    <h3 style={{color: '#fff', marginTop: '30px'}} >Material</h3>
                                                    <span style={{ color: '#fff' }}>{ dados.produto[dados.index].materiais }</span>
                                                </>
                                            ): null 
                                        }
                                    </div>
                                    <div className="col">
                                        { dados.produto[dados.index].cores 
                                            ? dados.produto[dados.index].cores.map((item, index) =>(
                                                <>
                                                    <h3 key={index} style={{color: '#fff' }}>Cores</h3>
                                                    <div style={{ color: '#fff', marginBottom: '15px'}}>
                                                        <span style={{ paddingLeft: '20px', marginRight: '15px', background: item.cor }}></span>  { item.descricao } - { item.grupo}  
                                                    </div>
                                                </>
                                            ))
                                            : null
                                        }
                                        
                                    </div>
                                    <div className="col">
                                        { dados.produto[dados.index].dimensoes
                                            ? (
                                                <div>
                                                    <h3 style={{color: '#fff'}} >Tamanho</h3>
                                                    <span style={{color: '#fff'}}>{ dados.produto[dados.index].dimensoes }</span>
                                                </div>
                                            ): null 
                                        }

                                        { dados.produto[dados.index].embalagem
                                            ? (
                                                <div>
                                                    <h3 style={{color: '#fff', marginTop: '30px'}}>Embalagem</h3>
                                                    <span style={{ color: '#fff' }}>{ dados.produto[dados.index].embalagem }</span>
                                                </div>
                                            ): null 
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
             
        </>
        )
    }
}

export default ModalProduto;
