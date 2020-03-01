import React from 'react'
import {
    NavLink
  } from "react-router-dom";

function Logo() {
    return (
        <NavLink exact to="/">
            <div className="navbar-brand h1 text-secondary">Logo</div>
        </NavLink>
    )
}

export default Logo
