import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Home from './components/Home';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoteState from './context/notes/NoteState';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <NoteState>
      <Router>
        <NavBar/>
        <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Signup />
            </Route>

            {/* <Route exact path="/logout">
              <About />
            </Route> */}


        </Switch>
        <Footer/>
      </Router>
    </NoteState>
  );
}

export default App;
