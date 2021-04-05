import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-light fixed-top p-4 justify-content-left">
                <div className="col-12 bg-dark text-white p-2">
                    <ul class="navbar-nav">
                        <div>
                            <a><Link className="nav-link" to="/">Página Inicial</Link></a>
                        </div>
                        <div>
                            <a><Link className="nav-link" to="/cardapio">Cardápio</Link></a>
                        </div>
                        <div>                        
                            <a><Link className="nav-link" to="/reservas">Reservas</Link></a>
                        </div>
                        <div>
                            <a><Link className="nav-link" to="/carrinho">Carrinho</Link></a>
                        </div>
                        <div className="justify-content-right">
                            <a><Link className="nav-link" to="/login">Login</Link></a>
                        </div>
                    </ul>
                </div>
            </nav>
        )
    }
}
