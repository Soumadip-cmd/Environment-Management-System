import React from "react";
import Login from "./components/Authentication/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import AboutUs from "./components/Pages/About Us/AboutUs";
import Carrier from "./components/Pages/Carrier/Carrier";
import Contact from "./components/Pages/Contact/Contact";
import CommunityRewards from "./components/Pages/Our Service/Community Rewards/CommunityRewards";
import WaterManegment from "./components/Pages/Our Service/Water Manegment/WaterManegment";
import AirQuality from "./components/Pages/Our Service/Air Quality/AirQuality";
import Blog from "./components/Pages/Blog/Blog";
import GarbageManagement from "./components/Pages/Our Service/Garbage/GarbageManagement";
import CameraState from "./components/Pages/Our Service/Garbage/context/CameraState";

function App() {
  return (
    <div>
      <CameraState>
        <Router>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>

            <Route exact path="/">
              <Login />
            </Route>

            <Route exact path="/aboutus">
              <AboutUs />
            </Route>

            <Route exact path="/carrier">
              <Carrier />
            </Route>

            <Route exact path="/contact">
              <Contact />
            </Route>

            <Route exact path="/community">
              <CommunityRewards />
            </Route>
            <Route exact path="/garbage">
              <GarbageManagement />
            </Route>

            <Route exact path="/blog">
              <Blog />
            </Route>

            <Route exact path="/waterleakage">
              <WaterManegment />
            </Route>

            <Route exact path="/airquality">
              <AirQuality />
            </Route>
          </Switch>
        </Router>
      </CameraState>
    </div>
  );
}

export default App;
