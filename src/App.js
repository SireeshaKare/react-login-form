import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoginForm from "./components/Login/loginForm";
import Welcome from "./components/Login/welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/welcome" component={Welcome} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
