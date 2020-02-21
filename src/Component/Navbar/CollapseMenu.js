import React, { Component } from 'react'

class CollapseMenu extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: false
        }
    }

    clickHandler = () => {
        this.setState({
            isLoggedIn: !this.state.isLoggedIn
        })
        document.activeElement.blur()
    }

    render() {
        const { isLoggedIn } = this.state
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {isLoggedIn ? (
                        <React.Fragment>
                            <li className="nav-item">
                                <button className="btn btn-primary btn-block">Colocar Anuncio</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn btn-primary btn-block" onClick={this.clickHandler}>Logout</button>
                            </li>
                        </React.Fragment>
                    ) : (
                            <React.Fragment>
                                <li className="nav-item">
                                    <button className="btn btn-primary">Registar</button>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-primary btn-block" onClick={this.clickHandler}>Entrar</button>
                                </li>
                            </React.Fragment>
                        )}
                </ul>
            </div>
        )
    }
}

export default CollapseMenu
