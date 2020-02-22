import React from 'react'
import Logo from '../Logo'
import Collapser from './Collapser'

function Navbar1() {
    return (

        <navbar className="navbar navbar-expand-md navbar-light bg-light border-bottom">
            <div className="container">
                <Logo />
                <Collapser />
            </div>
        </navbar>
    )
}

export default Navbar1
