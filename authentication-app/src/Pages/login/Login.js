import React from 'react';

import { ErrorMessage, Formik, Form, Field } from 'formik'; //para criar o formulario
import * as yup from 'yup'; //para validar os campos
import axios from 'axios';
import {history} from '../../history';

import './Login.css'

const Login = ( ) => {
  const handleSubmit = values => { //variável para guardar os valores digitados no form
    axios.post('http://localhost:8080/v1/api/auth', values) //mandando os valores para a API
      .then(resp => {
        const { data } = resp //pegando os dados retornados
        if (data) { //verificando se foram retornados os dados para setar o token
          localStorage.setItem('app-token', data); //setando o token usando o próprio valor retornado
          history.push('/'); //redirecionando para a home
        }
      
      })
  } 
  const validations = yup.object().shape({ //inicializando o validador
    email: yup.string().email().required(), //vai ser uma string de email obrigatoria
    password: yup.string().min(8).required()
  }) 
    
  return (
  <>
    <h1>Login</h1>
    <p>Fill the fields to continue</p>
    {/* Inicializando o formulario */}
    {/*inicializando com valor vazio e guardando os valores depois no handle*/}
    <Formik 
      initialValues={{}} 
      onSubmit={handleSubmit} 
      validationSchema={validations}
    > 
      <Form className="Login">
        <div className="Login-Group">
          <Field 
            name="email" //deve receber o campo email
            className="Login-Field"
          />
          <ErrorMessage //mensagem para caso dê erro
            component="span" 
            name="email" 
            className="Login-Error"
          />
        </div>

        <div className="Login-Group">
          <Field 
            name="password" //deve receber o campo email
            className="Login-Field"
            type="password"
          />
          <ErrorMessage //mensagem para caso dê erro
            component="span" 
            name="password" 
            className="Login-Error"
          />
        </div>
        <button className="Login-Btn" type="submit">Login</button> {/*botão para fazer login*/}
      </Form>
    </Formik>
  </>
  );
};

export default Login;