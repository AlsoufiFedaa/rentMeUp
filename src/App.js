import "./App.scss";

import React from "react";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SignUP from "./pages/signUP";
import AddContainer from "./pages/addContainer";
import MainContainer from "./pages/mapContainer";
import SingleEstate from "./pages/singleEstate";
import Error from "./pages/error";
import NavBar from "./Components/NavBar";
import LogIn from "./pages/logIn";
import { Route, Switch } from "react-router-dom";
// import Fire from "./pages/ClassFire";
function App() {
  return (
    <div>
      {/* <Fire /> */}
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/SignUP" component={SignUP} />
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/Profile" component={Profile} />
        <Route exact path="/AddPropery" component={AddContainer} />
        <Route exact path="/MainContainer" component={MainContainer} />
        <Route exact path="/SingleEstate" component={SingleEstate} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
