import React from 'react'
import { NavLink } from 'react-router-dom'

function MyAccountNav() {
    return (
        <div className="row">
            <div className="col-6 pt-2">
                <NavLink exact to={'/login'}>
                    <button className="btn btn-light w-100 rounded-0">
                        <h4>Entrar</h4>
                    </button>
                </NavLink>
            </div>
            <div className="col-6 pt-2">
                <NavLink exact to={'/register'}>
                    <button className="btn btn-primary w-100 rounded-0">
                        <h4>Registar</h4>
                    </button>
                </NavLink>

            </div>
        </div>
    )
}

export default MyAccountNav
