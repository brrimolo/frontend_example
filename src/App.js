import React, {Component} from 'react'

import './App.css';
import Menu from './menu/Menu';
import Home from './home/Home';
import Cardapio from './cardapio/Cardapio';
import Reservas from './reservas/Reservas';
import Carrinho from './carrinho/Carrinho';
import Login from './login/Login';
import Rodape from './rodape/Rodape';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div calssName="container-fluid">
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/cardapio">
              <Cardapio />
            </Route>
            <Route path="/reservas">
              <Reservas />
            </Route>
            <Route path="/carrinho">
              <Carrinho />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
          <Rodape />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
