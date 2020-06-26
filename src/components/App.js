import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import MenuButton from './menu.js';
import About from './about.js'
import Projects from './projects.js'
import Contact from './contact';

function App() {
  return (
    <div className="App">
      <Header />
      <MenuButton />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
