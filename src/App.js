import React, { Component } from 'react';
import HomeCard from './components/HomeCard';
import Navbar from './components/Navbar';
import TileContainer from  './components/TileContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className=" section hero is-success is-bold is-fullheight">
          <Navbar />
          <HomeCard />
        </section>
        <TileContainer />
      </div>
    );
  }
}

export default App;
