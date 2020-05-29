import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import Banner from "./Components/Banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/about">{/* <About /> */}</Route>
          <Route path="/users">{/* <Users /> */}</Route>
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
