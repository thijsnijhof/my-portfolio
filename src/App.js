import React, { Component } from 'react';
import HomeCard from './components/HomeCard';
import Navbar from './components/Navbar';
import TileContainer from  './components/TileContainer';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
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
        <About />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
