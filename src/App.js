import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Work from './components/work/Work';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Service from './components/service/Service';
import Router from 'router';

const App = () => {
  return (
    <>
    <Header />
    <main className='main' >
      <Home />
      {/* <Work /> */}
      {/* <About /> */}
      <Service />
      <Router />

      <Skills />
      <Qualification />
      <Contact />
    </main>

    <Footer />
    <Scrollup />
    </>
  );
}

export default App;
