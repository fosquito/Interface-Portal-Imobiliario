import React from 'react'
import Logo from '../Logo'
import FooterMenu from './FooterMenu'

function Footer1() {
    return (
        <footer className="bg-light border-top">
            <div className="container d-flex justify-content-md-center">
                <ul className="list-group list-group-horizontal-md">
                    <li className="list-group-item border-0">
                        <Logo />
                    </li>
                    <FooterMenu />
                </ul>
            </div>
        </footer>
    )
}

export default Footer1
