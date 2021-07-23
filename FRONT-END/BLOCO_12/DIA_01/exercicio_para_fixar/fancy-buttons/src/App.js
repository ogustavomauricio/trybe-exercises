// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .

import { div } from 'prelude-ls';
import React, { Component } from 'react';
import './App.css';


function handleClick () {
  console.log('clicou')
}
function handleClick1 () {
  console.log('clicou no botão 2')
}
function handleClick2 () {
  console.log('clicou no botão 3')
}

class App extends Component {
  render() {

    return (
      <div>
        <button onClick={handleClick}>Meu botão</button>
        <button onClick={handleClick1}>Meu botão2</button>
        <button onClick={handleClick2}>Meu botão3</button>
      </div>

      );
  }
   
}

export default App;
