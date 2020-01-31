import React from 'react';

import { Router, Switch, Route } from 'react-router'; //gerencia e lida com as rotas

//importando os componentes
import Login from '../Pages/login';
import Register from '../Pages/register';
import Home from '../Pages/home';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute'; //importando rota privada


import {history} from '../history';

const Routes = () => (
  <Router history={history}>
    <Switch> {/*verifica qual rota devo renderizar. Passo todas as rotas*/}
      <Route component={Login} exact path="/login" ></Route>{/*recebe qual componente irá renderizar e o caminho da url*/}
      <Route component={Register} exact path="/register" ></Route>
      {/*as rotas home e notfound são privadas, só acessa com login*/}
      <PrivateRoute component={Home} exact path="/" ></PrivateRoute>
      <PrivateRoute component={NotFound}></PrivateRoute> {/*parar tratar as rotas que não existem*/}
    </Switch>
  </Router>
);

export default Routes;