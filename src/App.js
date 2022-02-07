//Crie um component de class
// Crie uma arrow function que receba uma mensagem e exiba na tela
// Crie uma arrow function que retorne o dobro de um número e exiba na tela

import React, { Component } from "react";

class arrow extends Component {
  mensagem = () => {
    return "Douglas";
  };

  calc = (x) => {
    return x * 2;
  };

  render() {
    return (
      <div>
        <h1>{this.mensagem()} a perfeição.</h1>
        <h2>O dobro desse número vai ser: {this.calc(9909099900)}</h2>
      </div>
    );
  }
}

export default arrow;
