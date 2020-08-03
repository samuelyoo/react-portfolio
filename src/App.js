import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Intro from './components/Intro';
import Techinfo from './components/Techinfo';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Intro />
      <Techinfo />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
