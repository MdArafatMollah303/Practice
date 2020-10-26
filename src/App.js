import './App.css';
import Home from './components/Home/Home';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoRoute from './components/NoRoute/NoRoute';
import CountryDetails from './components/CountryDetails/CountryDetails';
const App = () => {
  return (
    <div>
    <Router>
    <Switch>
    <Route path = "/home">
    <Home/>
    </Route>
    <Route path = "/country/:countryName">
    <CountryDetails/>
    </Route>
    <Route exact path = "/">
   <Home/> 
    </Route>
    <Route path="*">
    <NoRoute></NoRoute>
    </Route>
    </Switch>
    </Router>
    </div>
  );
};

export default App;