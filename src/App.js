import "./App.scss";

import React from "react";
import Contact from "./pages/cotact";
import Home from "./pages/Home";
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
import HomeLogged from "./pages/homeLogged";
import Feedbacks from "./pages/feedbacksPage";
import Podkova from "../src/assets/fonts/Podkova-VariableFont_wght.ttf"

// import Fire from "./pages/ClassFire";
function App() {
  return (
    <AuthProvider>
      <div>
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Feedbacks" component={Feedbacks} />
          <Route exact path="/contactUs" component={Contact} />
          <Route exact path="/SignUP" component={SignUP} />
          <Route exact path="/LogIn" component={LogIn} />

          <PrivateRoute exact path="/HomeLogged" component={HomeLogged} />
          <PrivateRoute exact path="/MainContainer" component={MainContainer} />
          <PrivateRoute exact path="/AddPropery" component={AddContainer} />
          <PrivateRoute exact path="/SingleEstate/:id" component={SingleEstate} />
          <Route component={Error} />
        </Switch>
      </div>
    </AuthProvider>
  );
}

export default App;
