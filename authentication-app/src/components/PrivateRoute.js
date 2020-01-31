import React from 'react';

import { Route, Redirect } from 'react-router';

const PrivateRoute = props => { //criando a rota privada (só para usuarios com o token)
  const isLogged = !!localStorage.getItem('app-token') //se o valor do token não for nulo
  return isLogged ? <Route {...props}></Route> :  <Redirect to="/login"></Redirect> //se estiver logado eu importo uma rota, senão eu importo um redirect para a pagina de login
}

export default PrivateRoute;