import React from 'react';
import './App.css';

import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ExtracurricularActivities from './components/ExtracurricularActivities';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      {/* <ExtracurricularActivities /> */}
      <Contact />
    </div>
  );
}

export default App;