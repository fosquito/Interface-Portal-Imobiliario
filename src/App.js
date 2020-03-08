import React, { Component } from 'react';
import Navbar1 from './Component/Navbar/Navbar1'
import TransitionController from './Component/TransitionController';
import { LoginContext } from './Component/Context/LoginContext'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false,
      loginLogout: this.loginLogout
    }
  }

  loginLogout = () => {
    console.log("login")
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() {
    return (
      <LoginContext.Provider value={this.state}>
          <Navbar1 />
          <TransitionController />
      </LoginContext.Provider>
    )
  }
}

export default App;
