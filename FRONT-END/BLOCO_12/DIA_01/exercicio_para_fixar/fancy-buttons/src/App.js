// Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!!

import React, { Component } from 'react';
import './App.css';


function handleClick () {
  console.log('clicou')
}

class App extends Component {
  render() {

    return (
      <button onClick={handleClick}>Meu botão</button>
      );
  }
   
}

export default App;
