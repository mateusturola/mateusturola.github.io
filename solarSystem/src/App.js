import React, { Component } from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css'

import Stars from './components/Stars';



class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Stars />
        <Header />
        <SolarSystem />
        <Missions />


      </div>
      
    );
  }
}

export default App;
