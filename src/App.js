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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route path ="/about"><About/></Route>
      </Switch>
    </Router>
  );
}

export default App;
