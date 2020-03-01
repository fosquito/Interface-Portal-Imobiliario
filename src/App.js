import React, { useContext } from 'react';
import HomePage from './Component/HomePage';
import LoginPage from './Component/Login/Login'
import Navbar1 from './Component/Navbar/Navbar1'
import Footer1 from './Component/Footer/Footer1'
import { Route, Switch, __RouterContext } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

function App() {

  const { location } = useContext(__RouterContext)
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 1, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 1, transform: "translate(-100%, 0)" }
  })

  return (
    <>
      <Navbar1 />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
          </Switch>
        </animated.div>
      ))}
    </>
  )
}

export default App;
