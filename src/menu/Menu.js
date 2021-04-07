import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top p-4 justify-content-left">
                <div className="col-1">
                </div>
                <div className="col-9 bg-dark text-white p-3">
                    <ul class="navbar-nav">
                        <div className="col-2">
                            <a><Link className="nav-link" to="/">Página Inicial</Link></a>
                        </div>
                        <div className="col-2">
                            <a><Link className="nav-link" to="/cardapio">Cardápio</Link></a>
                        </div>
                        <div className="col-2">                        
                            <a><Link className="nav-link" to="/reservas">Reservas</Link></a>
                        </div>
                        <div className="col-2">
                            <a><Link className="nav-link" to="/carrinho">Carrinho</Link></a>
                        </div>
                    </ul>
                </div>
                <div className="col-1 bg-dark text-white p-3">
                    <div>
                        <a><Link className="nav-link text-white" to="/login">Login</Link></a>
                    </div>
                </div>
                <div className="col-1">
                </div>
            </nav>
        )
    }
}
