import './App.css';
import React from 'react';
import { About, Footer, Home, NavBar, Projects, SlidingBar, Stats, TrainingSessions } from './components';


function App() {
 

  return (
    <>
      <NavBar />
      <Home />
      <SlidingBar />
      <Stats/>
      <About />
      <TrainingSessions />
      <Projects />
      <Footer />
     
    </>
  );
}

export default App;
