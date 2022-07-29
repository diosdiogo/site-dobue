import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import './home.css';

import { SlideServices } from "../../services/services";
import { HomeServices } from "../../services/services";


const img1 = require("../../assets/img/carosel1.png");
const img2 = require("../../assets/img/carosel2.png");

class Home extends Component {
    state = {
        imageCarousel: [{
            src: '',
            alt: ''
        }],
        pagina:{
            titulo: '',
            titulo2: '',
            descriao_titulo:'',
            descricao2:'',
            video: '',
        }
    }

    async componentDidMount(){
        window.scrollTo(0,0);

        const imageCarousel = await SlideServices();
        const pagina = await HomeServices();
    
        this.setState({
            imageCarousel:[...imageCarousel],
            pagina:{...pagina}
        })
    }

    render(){
        const dados : any = this.state;
        return (
            <>
                <Carousel>
                    {dados.imageCarousel.map((item, index) => (
                        <Carousel.Item key={index} >
                            <img src={ item.src } className="d-block w-100 image-carrocel" loading="lazy" alt={ item.alt } />
                        </Carousel.Item>
                    
                    ) )}
                </Carousel>

                <div className="container">
                    <div className="row text-center" style={{marginTop: '18px'}}>
                        <div className="col"><h1 className="font-header">{ dados.pagina.titulo }</h1></div>
                    </div>
                </div>

                <div className="row text-center" style={{ marginTop: '18px' }}>
                    <div className="col"><span className="font-description">{ dados.pagina.descriao_titulo }</span></div>
                </div>
                <div className="c-ft-prod">
                    <img src={img1} className="d-block w-100 image-carrosel-produto" alt="" loading="lazy" />
                    <img src={img2} className="d-block w-100 image-carrosel-produto" alt="" loading="lazy" />
                </div>

                <div style={{backgroundColor:'#F3F3F3', marginTop:'15px', marginBottom:'15px'}}>
                    <div className="container">
                        <div className="row home-missao">
                            <div className="col">
                                <div className="video-home" style={{ height: '500px' }}>
                                    <iframe className="embed-responsive-item" src={ dados.pagina.video } allowFullScreen style={{ width: '100%', height: '100%' }} title="d" />
                                </div>
                            </div>
                            <div className="col">
                            <div className="card" id="card-missao">
                                <div className="card-body">
                                    <h5 className="card-title">{ dados.pagina.titulo2 }</h5>
                                    <p className="card-text">
                                        { dados.pagina.descricao2 }
                                    </p>
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

export default Home;
