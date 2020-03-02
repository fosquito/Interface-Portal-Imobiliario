import React from 'react'
import Logo from '../Logo'
import FooterMenu from './FooterMenu'

function Footer1() {
    return (
        <section id="footer">
            <footer className="bg-light border-top border-lightGrey py-2 position-relative w-100">
                <div className="container d-flex justify-content-md-center">
                    <ul className="list-group list-group-horizontal-md">
                        <li className="list-group-item border-0">
                            <Logo />
                        </li>
                        <FooterMenu />
                    </ul>
                </div>
            </footer>
        </section>
    )
}

export default Footer1
