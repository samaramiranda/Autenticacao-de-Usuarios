<h1 align="center">
  🔐 Autenticação de Usuários
</h1>


## :rocket: Sobre o projeto
Este é um sistema de autenticação de usuários onde foi desenvolvida uma API e um site em ReactJS que faz o uso desta API.

Na página de Registro o usuário pode fazer o seu cadastro informando os seguintes dados:
- Nome;
- Sobrenome;
- E-mail;
- Senha.

Caso um dos campos esteja vazio é exibido um alerta informando ao usuário que é necessário preenchê-lo. Após o cadastro os dados do usuário são salvos em um banco de dados SQLite3.

Já na página de Login para que o usuário possa realizar o login no sistema são solicitados a ele os seguintes dados:
- E-mail;
- Senha.

Esse e-mail e senha informados serão buscados no banco de dados para a validação, será verificado se eles existem e se estão relacionados, caso estejam corretos é feito o login do usuário no sistema por meio de um token JWT e ele tem acesso a página de "Home", mas se os dados informados não forem válidos para o login o usuário permanece na página de Login.


## :computer: Tecnologias usadas:

### NodeJS:

- `koa`: Para criação do servidor;
- `koa-router`: Para gerenciamento de rotas do servidor;
- `@koa/cors`: Para liberação do acesso a determinados recursos restritos;
- `koa-bodyparser`: Para conversão de dados da requisição;
- `boom`: Para o tratamento de erros;
- `fastest-validator`: Para a validação dos parâmetros recebidos no servidor;
- `sqlite3`: Para a criação do banco de dados;
- `sequelize, sequelize-cli`: Para o gerencimento do banco de dados.

### ReactJS:

- `Axios`: Utilizado para acessar a API dos usuários cadastrados;
- `react, react-dom, react-scripts`: Para o acesso aos elementos HTML, a árvore de elementos e alguns scripts para a aplicação no ReactJS;
- `react-router, react-router-dom`: Para a criação das rotas do sistema;
- `normalize.css`: Para retirar o estilo padrão CSS de cada navegador;
- `formik`: Para trabalhar com formulários;
- `yup`: Para validação dos campos.


## :bulb: Telas

![tela3](https://user-images.githubusercontent.com/23708544/89240110-84232b80-d5d1-11ea-8948-521fbb10005b.png)

![tela1](https://user-images.githubusercontent.com/23708544/89240107-82f1fe80-d5d1-11ea-936c-eba9e8df4eaa.png)

![tela2](https://user-images.githubusercontent.com/23708544/89240109-84232b80-d5d1-11ea-93d8-bd84d16f7117.png)

