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
          <FlipCard size={{width: "500px"}}>
              <CardFace style={{}}>
                  <h1>Front</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </CardFace>

              <CardFace>
                  <h1>Back</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </CardFace>
          </FlipCard>
        </div>
      </div>
    );
  }
}

export default App;
