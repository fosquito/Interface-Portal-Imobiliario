import React from 'react'
import Logo from '../Logo'
import Collapser from './Collapser'
import { Navbar } from 'react-bootstrap'

function Navbar1() {
    return (
        <section id="navbar">
            <Navbar className="navbar navbar-expand-md navbar-light bg-light border-bottom border-lightGrey">
                <div className="container">
                    <Logo />
                    <Collapser />
                </div>
            </Navbar>
        </section>
    )
}

export default Navbar1
