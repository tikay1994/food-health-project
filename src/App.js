import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";
import Calculation from "./Components/Calculation";
import Login from "./Components/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-background"></div>
        <Header />
        <Switch>
          <Route path="/cal">
            <Calculation />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Banner />
            <Main />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
