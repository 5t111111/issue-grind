import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Slide from "./components/Slide";
import Settings from "./components/Settings";

const globalStyle = {
  fontFamily: "'Titillium Web', sans-serif"
};

const App = () => (
  <div style={globalStyle}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/slide" component={Slide} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </div>
);

export default App;
