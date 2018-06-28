import React, { Component } from 'react';
import './App.css';

import Animals from '../components/animals/Animals';
import AnimalForm from '../components/animalForm/AnimalForm';
import connection from '../firebaseRequests/connection';

class App extends Component {
  componentDidMount () {
    const fb = connection();
    console.error(fb);
  }
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
