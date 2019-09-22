# Web.Hacka

## Download and Instalation

This project is open source in this [repository](https://github.com/BrunoFutema/HackathonMicroServices).

## Tema: Melhorar experiência de todos os envolvidos em um hackathon

<h3>Dificuldades</h3>
<p>Atualmente a comunicação é feita via Discord e não em uma ferramenta centralizada, abrindo diversos canais de vozes diferenciados por temas como Ajuda, Desafio, Bate-Papo, etc. Porém o Discord também é muito utilizado por gamers de diversas comunidades de jogos, tendo em vista que atualmente a comunidade de jogos é muito ampla isso dificulta que o Discord seja uma boa ferramenta para comunicação de algum projeto competitivo, também dificultando a construção das equipes, tendo diversos canais em aberto para solucionar vários assuntos com muitas pessoas envolvidas, também como o Discord não tem o propósito específico para a organização de um evento como o Hackathon por vezes o usuário se encontra com problemas como: não achar as informações importantes sobre os temas, construções de equipes, como é feita a entrega, etc. </p>

## Solução: Simplificar a comunicação via chat integrado

<p>Nossa solução foi pensada e analisada em cima dessas dificuldades, e teve como o objetivo elaborar a criação de um chat online com funcionalidades integradas a ele. Sendo elas 5 funcionalidades:</p>

<h4>Perfil de Coordenador</h4>
<ul>
    <li>Poder gerenciar regras e critérios que serão utilizados no Hackathon.</li>
    <li>Poderá manter conversas com os mentores e jurados envolvidos.</li>
    <li>Gerenciar os critérios de como será realizada a entrega dos projetos.</li>
</ul>

<h4>Perfil de Jurados</h4>
<ul>
    <li>Poder analisar os projetos entregues.</li>
    <li>Enviar uma avaliação para as equipes envolvidas.</li>
    <li>Escolher o(s) vencedor(s).</li>
</ul>

<h4>Perfil de Mentores</h4>
<ul>
    <li>Poderá manter as conversas com diversos times, orientando e tirando as dúvidas dos participantes.</li>
    <li>Enviar feedbacks/mensagens para os Coordenadores.</li>
</ul>

<h4>Perfil de Participante</h4>
<ul>
    <li>Poderá criar e gerenciar suas equipes.</li>
    <li>Poderá manter conversas com os mentores e coordenadores envolvidos.</li>
    <li>Enviar mensagens e abrir chamados para tirar dúvidas com os mentores.</li>
</ul>

## Regras

<h4>Criação das equipes</h4>

<p>Após ter feito login no sistema, o participante poderá se inscrever em um Hackathon aberto pela equipe organizadora do evento.</p>
<p>No momento em que é feita a inscrição no Hackathon o participante deverá informar se ele já tem uma equipe montada ou se está entrando sozinho.</p>
<p>Caso o participante já tenha uma equipe, o mesmo será redirecionado para a tela de conversas já com o seu time montado com seus integrantes.</p>
<p>Caso o participante não tenha uma equipe, o mesmo entrará automaticamente em um grupo central com todos os integrantes do Hackathon.</p>

<h4>Submissão de projetos e Avaliação</h4>

<p>Todos os chats ficarão bloqueados paras os perfis de Mentores e Participantes após a submissão dos projetos que posteriormente serão analisados pelos Jurados.</p>
<p>Após a avaliação feita pelos jurados, será enviado via chat para todos os times participantes um resultado final de como foi aceita a solução desenvolvida pela equipe.</p>

<h5>ATENÇÃO</h5>

<p>Os print relatados na parte de <a href="#Front-End">telas</a> são apenas um protótipo da ideia apresentada.</p>

## Estrutura da solução

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

<h4>Tela Principal</h4>
<p>Uma vez logado no sistema, o usuário será redirecionado para a tela principal onde irá mostrar as conversas com os Jurados, Mentores, Coordenadores e de sua própria equipe.</p>

<p><img src="https://github.com/BrunoFutema/HackathonMicroServices/blob/master/client-side/public/images/Site/Web.Hacka_Admin.jpg" alt="Tela Principal do Sistema" /></p>