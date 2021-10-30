import React, { Component } from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css'
import Stars from './components/Stars';
import Footer from './components/footer';



class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Stars />
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </div>
      
    );
  }
}

export default App;
