import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import UsedCar from "./components/pages/UsedCar/UsedCar";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/usedCar" component={UsedCar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
