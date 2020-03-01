import React from 'react';
import HomePage from './Component/HomePage';
import Login from './Component/Login/Login'
import Navbar1 from './Component/Navbar/Navbar1'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Navbar1 />
      <Route exact path="/" component={home} />
      <Route exact path="/login" component={login} />
    </Router>
  )
}

const home = () => {
  return (
    <HomePage />
  )
}

const login = () => {
  return(
    <Login />
  )
}

export default App;
