import React from 'react'
import {
    NavLink
} from "react-router-dom";

function CollapseMenu() {

    const clickHandler = () => {
        document.activeElement.blur()
    }

    const isLoggedIn = false


    return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto float-right">
                    <li className="nav-item">
                        <NavLink exact to={isLoggedIn ? '/' : '/myaccount'}>
                            <button className="btn btn-primary mr-2">Colocar Anúncio</button>
                        </NavLink>
                    </li>
                    {isLoggedIn ? (
                        <li className="nav-item">
                            <button className="btn btn-light" onClick={clickHandler}>Sair</button>
                        </li>
                    ) : (
                            <li className="nav-item" >
                                <NavLink exact to={isLoggedIn ? '/myaccount' : '/login'}>
                                    <button className="btn btn-light" onClick={clickHandler}>Minha conta</button>
                                </NavLink>
                            </li>
                        )}
                </ul>
            </div>
    )
}


export default CollapseMenu
