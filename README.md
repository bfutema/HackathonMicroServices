# Web.Hacka

## Download and Instalation

intalling and serving MongoBD in your pc:
```
mongo instalation ....
mongo running ...
```
 
## Installing dependencies:

Command Prompt 1:
```
cd api-authenticate/
yarn install
```

Command Prompt 2:
```
cd api-messages/
yarn install
```

Command Prompt 3:
```
cd client-side/
npm install
```

## Running the projects:

Command Prompt 1:
```
node ./api-authenticate/src/app
```

Command Prompt 2:
```
node ./api-authenticate/src/index
```

Command Prompt 3:
```
cd client-side/
npm start
```

## Theme: Improve the experience of everyone involved in a hackathon

<h3>Difficulties</h3>
<p>Currently the communication is done via Discord and not in a centralized tool, opening several voice channels differentiated by themes such as Help, Challenge, Chat, etc. However, Discord is also widely used by gamers from various gaming communities, given that the gaming community is currently very large, making it difficult for Discord to be a good tool for communicating a competitive project, making it difficult to build teams, Having several channels open to solve various issues with many people involved, also as Discord does not have the specific purpose for organizing an event like a Hackathon, because sometimes the user encounters problems such as: not finding the important information on the topics, team building, how delivery is done, etc. </p>

## Solution: Simplify integrated chat communication

<p>Our solution was designed and analyzed on the basis of these difficulties, and aimed to elaborate the creation of an online chat with features integrated to it. These are 5 features:</p>

## Funcionalidades

<ul>
    <li>Creation of teams. (Participants)</li>
    <li>Opening conversations with mentors. (Participants, Mentors)</li>
    <li>Configure Hackathon rules and criteria. (Coordinators, Jurors)</li>
    <li>Disseminate project evaluations. (Jurors)</li>
    <li>Submit the projects. (Participants)</li>
</ul>

## User Profile

<h4>Coordinator Profile</h4>
<ul>
    <li>Be able to manage rules and criteria that will be used in Hackathon.</li>
    <li>keep conversations with mentors and jurors involved.</li>
    <li>Manage the criteria for how projects will be delivered.</li>
</ul>

<h4>Jurors Profile</h4>
<ul>
    <li>To be able to analyze the delivered projects.</li>
    <li>Submit an assessment to the teams involved.</li>
    <li>Choose the winners.</li>
</ul>

<h4>Mentors's Profile</h4>
<ul>
    <li>Keep conversations with various teams, guiding and answering questions from participants.</li>
    <li>Send feedback / messages to the Coordinators.</li>
</ul>

<h4>Participant Profile</h4>
<ul>
    <li>create and manage your teams.</li>
    <li>Keep conversations with the mentors and coordinators involved.</li>
    <li>Send messages and open calls to ask questions from mentors.</li>
</ul>

## Rules

<h4>Team Criation</h4>


<p>After login, participants can register for a Hackathon opened by the event organizing team.</p>
<p>At the time of enrolling in Hackathon, the participant must inform if they already have a team together or are joining alone.</p>
<p>If the participant already has a team, they will be redirected to the conversation screen already with their team meeting with their members.</p>
<p>If the participant does not have a team, they will automatically join a core group with all Hackathon members.</p>

<h4>Opening a conversation with Mentor</h4>

<p>Open conversations with mentors should have a time frame for chat to be available for teams to answer their questions.</p>

<h4>Project Submission and Evaluation</h4>

<p>All conversations will be blocked to Mentor and Participant profiles upon submission of the projects, which will be further reviewed by the Jury.</p>
<p>After judging the judges, a final result will be sent via chat to all participating teams about how the solution developed by the team was accepted.</p>

<h5>ATTENTION</h5>

<p>The impressions reported on the <a href="#Front-End">Views</a>  are just a prototype of the idea presented.</p>

## Solution Structure

<ul>
  <li><a href="#APIAutenticacao">Autenthicate API.</a></li>
  <li><a href="#APIEnvioMensagens">Messages API</a></li>
  <li><a href="#Front-End">Views</a></li>
</ul>

## Architech

<p>We created the project using micro-services architecture, separating the responsibilities between authentication, messages and the front end.</p>

## Database

<p>We use mongodb database because your operation is based on key and value to store user data and messages sent by the application.
</p>

<hr>

<h2 id="APIAutenticacao">Autenthicate API</h2>

<p>An authentication API is created for a web.api made in [Node.js](https://nodejs.org/en/), [Json Web Token](https://jwt.io/) and [Express](https://expressjs.com/pt-br/) which is intended to enable user creation and authentication for better overall system performance.</p>

<h2 id="APIEnvioMensagens">Messages API</h2>

<p>Built to separate responsibilities from messages.</p>

<hr>

<h2 id="Front-End">Views</h2>

<h4>Login Screen</h4>
<p>The user will login or create their system account.</p>

<p><img src="https://github.com/BrunoFutema/HackathonMicroServices/blob/master/client-side/public/images/Site/Web.Hacka_Login.jpg" alt="Tela de Login" /></p>

<h4>Principal view</h4>
<p>The first time the user logs in, the user will be redirected to the main screen where they will show conversations with the Jury, Mentors, Coordinators and their own team.</p>

<p><img src="https://github.com/BrunoFutema/HackathonMicroServices/blob/master/client-side/public/images/Site/Web.Hacka_Admin.jpg" alt="Tela Principal do Sistema" /></p>
