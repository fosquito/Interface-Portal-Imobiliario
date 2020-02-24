import React from 'react'
import Logo from '../Logo'
import Collapser from './Collapser'
import { Navbar } from 'react-bootstrap'

function Navbar1() {
    return (
            <Navbar className="navbar navbar-expand-md navbar-light bg-light border-bottom">
                <div className="container">
                    <Logo />
                    <Collapser />
                </div>
            </Navbar>
    )
}

export default Navbar1
