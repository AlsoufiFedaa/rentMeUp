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
import AuthProvider from "./Components/auth";
import PrivateRoute from "./Components/privateRoute";
// import Fire from "./pages/ClassFire";
function App() {
  return (
    <AuthProvider>
      <div>
        {/* <Fire /> */}
        <NavBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/SignUP" component={SignUP} />
          <Route exact path="/LogIn" component={LogIn} />
          <PrivateRoute exact path="/Profile" component={Profile} />
          <PrivateRoute exact path="/AddPropery" component={AddContainer} />
          <PrivateRoute exact path="/MainContainer" component={MainContainer} />
          <PrivateRoute exact path="/AddPropery" component={AddContainer} />
          <Route exact path="/SingleEstate" component={SingleEstate} />
          <Route component={Error} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
