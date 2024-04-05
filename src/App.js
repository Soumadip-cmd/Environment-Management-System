import React from "react";
import Login from "./components/Authentication/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./components/Pages/Home";

function App() {
  return (
    <div>
      
      <Router>
      <Switch>
          <Route exact path="/">
          <Login/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
