import React, { Component } from 'react';
import './App.css';

import Animals from '../components/animals/Animals';
import AnimalForm from '../components/animalForm/AnimalForm';

class App extends Component {
  render () {
    return (
      <div className="app">
        <div className="col-sm-6">
          <Animals/>
        </div>
        <div className="col-sm-6">
          <AnimalForm/>
        </div>
      </div>
    );
  }
}

export default App;
