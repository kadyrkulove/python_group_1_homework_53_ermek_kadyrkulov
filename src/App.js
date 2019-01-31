import React, { Component } from 'react';
import './App.css';
import Generate from './Component/Generate/Generate';

class App extends Component {

    state = {
        numbers: [
            0,
            0,
            0,
            0,
            0
        ]
    };

  generateNumbers = () => {
      let numbers = []
      for (let i = 0; i < 5; i++) {
          let number = Math.floor(Math.random() * 50) + 5;
          if (numbers.indexOf(number) > -1){
              i-=1
          }
          else {
              numbers.push(number)
          }
      }
      return numbers.sort(function (a, b) {
          return a-b
      });

  };


    buttonClick = () => {
        console.log('Генерация');
        let newState = {...this.state};
        newState.numbers = this.generateNumbers();
        this.setState(newState);
    }


  render() {
    return (
      <div className="App">
            <Generate number={this.state.numbers[0]}/>
            <Generate number={this.state.numbers[1]}/>
            <Generate number={this.state.numbers[2]}/>
            <Generate number={this.state.numbers[3]}/>
            <Generate number={this.state.numbers[4]}/>


        <div className='button'>
          <button onClick={() => this.buttonClick()}><p>Generate</p></button>
        </div>
      </div>
    );
  }
}

export default App;