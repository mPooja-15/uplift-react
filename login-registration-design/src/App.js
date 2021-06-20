import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbar";
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <div className="app_content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
};

export default App;
