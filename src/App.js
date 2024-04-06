import React from "react";
import Login from "./components/Authentication/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from "./components/Pages/Home/Home";
import AboutUs from "./components/Pages/About Us/AboutUs";
import Carrier from "./components/Pages/Carrier/Carrier";
import Contact from "./components/Pages/Contact/Contact";
import ClimateChange from "./components/Pages/Our Service/Climate Change/ClimateChange";
import CommunityRewards from "./components/Pages/Our Service/Community Rewards/CommunityRewards";
import LandfilManegemnt from "./components/Pages/Our Service/Landfil Manegment/LandfilManegemnt";
import RecycleInitiative from "./components/Pages/Our Service/Recycle Initiative/RecycleInitiative";
import WasteManegment from "./components/Pages/Our Service/Waste Manegment/WasteManegment";
import WaterManegment from "./components/Pages/Our Service/Water Manegment/WaterManegment";
import AirQuality from "./components/Pages/Our Service/Air Quality/AirQuality";
function App() {
  return (
    <div>
      
      <Router>
      <Switch>
         <Route exact path="/home">
            <Home/>
          </Route>

          <Route exact path="/">
          <Login/>
          </Route>

          <Route exact path="/aboutus">
            <AboutUs/>
          </Route>

          <Route exact path="/carrier">
            <Carrier/>
          </Route>

          <Route exact path="/contact">
            <Contact/>
          </Route>

          <Route exact path="/climate">
            <ClimateChange/>
          </Route>

          <Route exact path="/community">
            <CommunityRewards/>
          </Route>

          <Route exact path="/landfill">
            <LandfilManegemnt/>
          </Route>

          <Route exact path="/recycling">
            <RecycleInitiative/>
          </Route>

          <Route exact path="/wastemanegment">
            <WasteManegment/>
          </Route>

          <Route exact path="/waterleakage">
            <WaterManegment/>
          </Route>


          <Route exact path="/airquality">
            <AirQuality/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
