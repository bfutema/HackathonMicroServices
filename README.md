# Web.Hacka

## Download and Instalation

This project is open source in this [repository](https://github.com/BrunoFutema/HackathonMicroServices).

## Tema: Melhorar experiência de todos os envolvidos em um hackathon

<p></p>

## Solução: Simplificar a comunicação via chat online

<ul>
  <li><a href="#APIAutenticacao">API de Autenticacão.</a></li>
  <li><a href="#APIEnvioMensagens">API de Mensageria.</a></li>
  <li><a href="#Front-End">Telas</a></li>
</ul>

## Arquitetura

<p>Criamos o projeto utilizando arquitetura em micro serviços, separando as responsabilidades entre autenticação, envio de mensagens e o front-end.</p>

## Banco de Dados

<p>Usamos o banco de dados do mongodb devido seu funcionamento se basear de chave e valor, para armazenar dados dos usuários e das mensagens enviadas pelo aplicativo.</p>

<hr>

<h2 id="APIAutenticacao">API de Autenticação</h2>

<p>A API de autenticação é constutuída de uma web.api feita em [Node.js](https://nodejs.org/en/), [Json Web Token]() e [Express]() que tem o intuito de possibilitar a criação de usuários e autenticação dos mesmo tendo em vista um melhor desempenho geral do sistema.</p>

<h2 id="APIEnvioMensagens">API de Envio de Mensagens</h2>

<p>Criada para separar a responsabilidades dos envio de mensagens.</p>

<hr>

<h2 id="Front-End">Telas</h2>

<h4>Tela de Login</h4>
<p>O usuário irá se logar ou criar sua conta no sistema.</p>

<p><img src="https://github.com/BrunoFutema/HackathonMicroServices/blob/master/client-side/public/images/Site/Web.Hacka_Login.jpg" alt="Tela de Login" /></p>

<h4>Tela de Principal</h4>
<p>Uma vez logado no sistema, o usuário será redirecionado para a tela principal onde irá mostrar as conversas com os Jurados, Mentores, Coordenadores e de sua própria equipe.</p>

<p><img src="https://github.com/BrunoFutema/HackathonMicroServices/blob/master/client-side/public/images/Site/Web.Hacka_Admin.jpg" alt="Tela Principal do Sistema" /></p>