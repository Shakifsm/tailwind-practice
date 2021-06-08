import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Home from './components/Home/Home';
import Menu from './components/Menu/Menu';
import Dropdown from './components/Dropdown/Dropdown';
import { useEffect, useState } from 'react';
import Contact from './components/Contact/Contact';


function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toogle = () =>{
    setIsOpen(!isOpen)
  }

  useEffect(() =>{
    const hideMenu = () =>{
      if(window.innerWidth > 768 && isOpen){
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', hideMenu);

    return () =>{
      window.removeEventListener('resize', hideMenu)
    }
    
  })

  return (
    <Router>
      <Navbar toogle={toogle}></Navbar>
      <Dropdown toogle={toogle} isOpen={isOpen}></Dropdown>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about">
          <About></About>
        </Route>
        <Route path="/menu">
          <Menu></Menu>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
