import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import MenuButton from './menu.js';
import About from './about.js'
import Projects from './projects.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MenuButton />
      <About />
      <Projects />

    </div>
  );
}

export default App;
