import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div className="row mt-5 p5">
                {/* ----------------  E-mail -------------------*/}
                <div className="row mt-5 pt-5">
                    <div className="col-1">
                    </div>
                    <div className="col-2 ml-1">
                        e-mail:
                    </div>
                    <div className="row mt-2">
                        <div className="col-1">
                        </div>
                        <div className="col-4 ml-5">
                            <input className="form-control name-pull-image" type="text"></input>
                        </div>
                    </div>
                </div>
                {/* ----------------   Senha -------------------*/}
                <div className="row mt-1 pt-3">
                    <div className="col-1">
                    </div>
                    <div className="col-2 ml-1">
                        senha:
                    </div>
                    <div className="row mt-2">
                        <div className="col-1">
                        </div>
                        <div className="col-4 ml-5">
                                <input className="form-control name-pull-image" type="text"></input>
                        </div>
                    </div>
                </div>
                {/* ----------------  Botoes -------------------*/}
                <div className="row mt-5 pt-3">
                    <div className="col-1">
                    </div>
                    <div className="btn-group">
                        <div className="m-1"><button type="button" className="btn btn-primary btn-lg">Entrar</button></div>
                        <div className="m-1"><button type="button" className="btn btn-secondary btn-lg">Large button</button></div>
                    </div>
                </div>
            </div>
        )
    }
}
