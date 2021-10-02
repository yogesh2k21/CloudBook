import "./App.css";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message,color,icon) => {
    setAlert({
      msg: message,
      color: color,
      icon:icon
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <NoteState>
      <Router>
        <NavBar showAlert={showAlert}/>
        <Alert alert={alert}/>
        <Switch>
          <Route exact path="/">
            <Home showAlert={showAlert}/>
          </Route>

          <Route exact path="/about">
            <About />
          </Route>

          <Route exact path="/login">
            <Login showAlert={showAlert}/>
          </Route>

          <Route exact path="/signup">
            <Signup showAlert={showAlert}/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </NoteState>
  );
}

export default App;
