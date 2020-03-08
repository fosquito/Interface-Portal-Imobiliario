import React, { Component } from 'react';
import Navbar1 from './Component/Navbar/Navbar1'
import TransitionController from './Component/TransitionController';
import { MyContext } from './Component/MyContext'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoggedIn: false
    }
  }

  loginLogout = () => {
    console.log("login")
    this.setState({
      isLoggedIn: !this.state.isLoggedIn
    })
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <MyContext.Provider value={isLoggedIn}>
          <Navbar1 />
          <TransitionController />
      </MyContext.Provider>
    )
  }
}

export default App;
