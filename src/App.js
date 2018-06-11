import React from "react";
import { Route } from "react-router-dom";
import Settings from "./components/Settings";
import Slide from "./components/Slide";

const App = () => {
  return (
    <div>
      <Route path="/slide" component={Slide} />
      <Route path="/settings" component={Settings} />
    </div>
  );
};

export default App;
