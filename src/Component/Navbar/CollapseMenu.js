import React, { Component } from 'react'
import {
    NavLink
} from "react-router-dom";

class CollapseMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    clickHandler = () => {
        // this.setState({
        //     isLoggedIn: !this.state.isLoggedIn
        // })
        document.activeElement.blur()
    }

    render() {
        const { isLoggedIn } = this.state
        return (

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto float-right">
                    {isLoggedIn ? (
                        <React.Fragment>
                            <li className="nav-item">
                                <button className="btn btn-primary mr-2">Colocar Anúncio</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-light" onClick={this.clickHandler}>Sair</button>
                            </li>
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <li className="nav-item">
                                    <button className="btn btn-light">Registar</button>
                                </li>
                                <li className="nav-item" >
                                    <NavLink exact to={'/login'}>
                                        <button className="btn btn-light" onClick={this.clickHandler}>Entrar</button>
                                    </NavLink>
                                </li>
                            </React.Fragment>
                        )}
                </ul>
            </div>
        )
    }
}

export default CollapseMenu
