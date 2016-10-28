import React, { Component } from 'react';
import FlipCard from './flip-card/FlipCard';
import CardFace from './flip-card/CardFace';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>3D Flip Card</h2>
        </div>
        <p className="App-intro">
          I'm making a <code>{"<FlipCard />"}</code> component, yay! 😸
        </p>
        <div className="App-testbed">
          <FlipCard width={260} height={380}>
              <CardFace>
                  <h1>Front</h1>
              </CardFace>

              <CardFace>
                  <h1>Back</h1>
              </CardFace>
          </FlipCard>
        </div>
      </div>
    );
  }
}

export default App;
