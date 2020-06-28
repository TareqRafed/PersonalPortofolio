import React, {useRef} from 'react';
import '../css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header.js';
import MenuButton from './menu.js';
import About from './about.js'
import Projects from './projects.js'
import Contact from './contact';

function App() {

  const handleClick = (section) => { // a function to smooth scroll between pages from nav bar, used this way to avoid refs
    console.log("button clicked");
    switch (section){
      case "about": 
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      break;
      case "projects":
        window.scrollTo({
          top: vh(100),
          behavior: 'smooth',
        });
        break;
       case "contact":
          window.scrollTo({
            top: vh(200),
            behavior: 'smooth',
          });
          break;
      default:
        alert("error with button source code");
    }
    
  }
  return (
    <div className="App">
      <Header  scrollTo={(position) =>handleClick(position)} />
      <MenuButton scrollTo={(position) =>handleClick(position)} />
      <About scrollTo={(position) =>handleClick(position)} />
      <Projects />
      <Contact />
    </div>
  );
}



/* calculate vh and return it to switch statment */

function vh(v) {
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  return (v * h) / 100;
}

export default App;
