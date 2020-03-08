import React, {useContext} from 'react'
import { useTransition, animated } from 'react-spring'
import { Switch, Route, __RouterContext } from 'react-router-dom'
import HomePage from './HomePage';
import MyAccount from './MyAccount/MyAccount'

function TransitionController() {
    const { location } = useContext(__RouterContext)
    const transitions = useTransition(location, location => location.pathname, {
        from: { opacity: 1, transform: "translate(100%, 0)" },
        enter: { opacity: 1, transform: "translate(0%, 0)" },
        leave: { opacity: 1, transform: "translate(-100%, 0)" }
    })

    return (
        <>
            {transitions.map(({ item, props, key }) => (
                <animated.div key={key} style={props}>
                    <Switch location={item}>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/(myaccount|login|register)" component={MyAccount} />
                    </Switch>
                </animated.div>
            ))}
        </>
    )
}

export default TransitionController
