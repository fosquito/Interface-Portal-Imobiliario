import React from 'react'
import Logo from './Logo'
import Collapser from './Collapser'

function Navbar1() {
    return (
        <navbar className="navbar navbar-expand-md navbar-light bg-white border-bottom">
           <Logo />
           <Collapser />
        </navbar>
    )
}

export default Navbar1
