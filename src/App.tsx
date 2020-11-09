import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import UsedCar from "./components/pages/UsedCar/UsedCar";
import Register from "./components/pages/Register/Register";
import Login from "./components/pages/Login/Login";
import MyPage from "./components/pages/MyPage/MyPage";
import Auth from "./hoc/Auth";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Auth(Home, null)} />
          <Route exact path="/usedCar" component={Auth(UsedCar, true)} />
          <Route exact path="/register" component={Auth(Register, false)} />
          <Route exact path="/login" component={Auth(Login, false)} />
          <Route exact path="/me" component={Auth(MyPage, true)} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
