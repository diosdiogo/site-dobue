import React, { Component } from "react";
import './style.css';

import { PageContatoServices } from "../../services/services";
import { ContatoServices } from "../../services/services";

class Contato extends Component {
    state = {
        form: {
            nome:       '',
            email:      '',
            assunto:    '',
            msg:        '',
        },
        pageContato: {},
        contato: '',
        center: { lat: -23.3229379, lng: -51.5577118 },
        markers: [
            {
                position: {
                    lat: -23.3229360, 
                    lng: -51.5577118
                }
            },
        ]
    }

    async componentDidMount(){
        window.scrollTo(0,0);

        const pageContato = await PageContatoServices();
        const contato = await ContatoServices();
    
        this.setState({
            contato: {...contato},
            pageContato: {...pageContato}
        })
    }

    handleChangeNome(event) {
        this.setState({form:{nome: event.target.value}});
    }

    handleChangeEmail(event) {
        this.setState(
            {
                form:{email: event.target.value}
            }
        );
    }

    handleChangeAssunto(event) {
        this.setState(
            {
                form:{assunto: event.target.value}
            }
        );
    }

    handleChangeMsg(event) {
        this.setState(
            {
                form:{msg: event.target.value}
            }
        );
    }

    handleSubmit(event) {
        this.setState({
            form: {
                nome:       '',
                email:      '',
                assunto:    '',
                msg:        '',
            }
        })
        alert("Mensagem enviada com sucesso")
    }

    render(){
        const dados : any = this.state;


        return (
            <>
                <div style={{ backgroundColor: '#F3F3F3' }}>
                    <div className="container pb-5">
                        <div className="row text-center">
                            <div className="col">
                                <h1 className="font-header">{ dados.pageContato.titulo }</h1>
                                <span>{ dados.pageContato.descricao }</span>
                            </div>
                        </div>
                        <div className="row contato-row" style={{ marginTop: '15px' }}>
                            <div className="col">
                                <form action="" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <input className="form-control" id="input-nome"
                                                type="text"
                                                value={dados.form.nome}
                                                onChange={this.handleChangeNome}
                                                placeholder="Seu nome"
                                                required  />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" id="input-nome"
                                                value={dados.form.email}
                                                onChange={this.handleChangeEmail}
                                                type="email"
                                                placeholder="Seu emai"
                                                required />
                                    </div>
                                    <div className="form-group">
                                        <input className="form-control" id="input-assuntoe"
                                                value={dados.form.assunto}
                                                onChange={this.handleChangeAssunto}
                                                type="text"
                                                placeholder="Seu assunto"
                                                required />
                                    </div>
                                    <div className="form-group">
                                        <textarea className="form-control" id="textarea" rows={3} max-rows="6" placeholder="Sua mensagem..." value={dados.form.msg} onChange={this.handleChangeMsg}></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-contato-enviar" style={{ color: '#fff', borderColor: '#007bff' }}>ENVIAR</button>

                                </form>
                            </div>
                            <div className="col">
                                {/* <!-- -------------------------------------------------//
                                // Mapa                                              //
                                //--------------------------------------------------- --> */}

                                <iframe 
                                src={ dados.contato.maps }
                                className="map-contato" style={{ border:0 }} allowFullScreen loading="lazy" title="map"/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Contato;
