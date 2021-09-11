import './App.css';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import About from './components/About/About';
import Home from './components/Home/Home';
import Skill from './components/Skill/Skill';
import { useState } from 'react';
import MenuButton from './components/Navbar/MenuButton/MenuButton';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <Router>
      <Navbar toggle={toggle} />
      <MenuButton isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about"><About /></Route>
        <Route path="/skills"><Skill /></Route>
      </Switch>
    </Router>
  );
}

export default App;
