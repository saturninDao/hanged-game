import React, { Component } from 'react';

// On declare notre Set qui represente le mot a trouver
const laPrase = new Set(["M","A","G","N","O","U","D","E","W"]);


class App extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      checkedItems: laPrase
    }
  }

  computeDisplay(phrase, usedLetters) {  
	
    return phrase.replace(/\w/g,    (letter) => (usedLetters.has(letter) ? letter : '_'))
  }


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Bienvenue dans le jeu PENDU</h2>
        </div>
        <p className="App-intro">
          Devinnez chaque lettre et on avance :)
        </p>
        <div>
            {Array.from(laPrase).map((index,key)=>(
              <span key={key}> {"_"} </span>
            ))}
        </div>
      </div>
    );
  }
  
  
}

export default App;
