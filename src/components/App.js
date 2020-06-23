import React from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import MenuButton from './menu.js';
import About from './about.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MenuButton />
      <About />
    </div>
  );
}

export default App;
