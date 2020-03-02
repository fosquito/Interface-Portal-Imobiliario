import React from 'react'
import { NavLink } from 'react-router-dom'

function MyAccountNav() {
    return (
        <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
                <NavLink exact to={'/myaccount/login'}>
                    <div className="a nav-link active">Entrar</div>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to={'/myaccount/register'}>
                    <div className="a nav-link">Registar</div>
                </NavLink>
            </li>
        </ul>
    )
}

export default MyAccountNav
