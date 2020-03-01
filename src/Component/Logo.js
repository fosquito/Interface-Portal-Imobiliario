import React from 'react'
import {
    Link
  } from "react-router-dom";

function Logo() {
    return (
        <Link to="/">
            <div className="navbar-brand h1 text-secondary">Logo</div>
        </Link>
    )
}

export default Logo
