import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Foooter/Footer';
import './App.css';
;

const App=()=> {

  return (
    <>
   
    <div className='App' >
      <Navbar/>
      <Footer/>
      </div>
      
    </>
  );
}

export default App;
