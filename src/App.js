import React, { Component } from 'react';
import Router from './router'
import Nav from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        
        <Nav/>

        <Router/>

      </div>
    );
  }
}

export default App;
