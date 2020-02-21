import React from 'react'
import CollapseMenu from './CollapseMenu'

function Collapser() {
    return (
        <React.Fragment>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <CollapseMenu />
            </React.Fragment>
    )
}

export default Collapser

