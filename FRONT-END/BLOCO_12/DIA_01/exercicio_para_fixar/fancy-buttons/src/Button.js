// Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão!
import React, { Component } from 'react';

class Button extends Component {
 constructor() {
   super()

   this.state = {
     numeroDeCliques: 0
   }

   this.handleClick = this.handleClick.bind(this);

 }

  handleClick = () => {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }))
}

  render() {

    return (   
        <button onClick={this.handleClick}>{this.state.numeroDeCliques}</button>
    );
  }   
}

export default Button;
