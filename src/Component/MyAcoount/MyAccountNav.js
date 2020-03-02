import React, { Component } from 'react'
import { NavLink, withRouter } from 'react-router-dom'

class MyAccountNav extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: this.props.isLoggedIn,
            pathname: this.props.location.pathname
        }
    }

    static getDerivedStateFromProps(props) {
        if(props.location.pathname === "/myaccount" && !props.isLoggedIn){
            props.history.push('/login')
        }
        return null
    }

    buttonClicked = () => {
        document.activeElement.blur()
    }

    render() {
        const {pathname} = this.props.history.location
        let btnLogin = ""
        let btnRegister = ""
        if(pathname === "/login"){
            btnLogin = "btn btn-light w-100 rounded-0 nohover"
            btnRegister = "btn btn-primary w-100 rounded-0"
        }
        else if(pathname === "/register"){
            btnLogin = "btn btn-primary w-100 rounded-0"
            btnRegister = "btn btn-light w-100 rounded-0 nohover"
        }

        return (
            <div className="row">
                <div className="col-6 pt-2">
                    <NavLink exact to={'/login'}>
                        <button className={btnLogin} onClick={this.buttonClicked}>
                            <h4>Entrar</h4>
                        </button>
                    </NavLink>
                </div>
                <div className="col-6 pt-2">
                    <NavLink exact to={'/register'}>
                        <button className={btnRegister} onClick={this.buttonClicked}>
                            <h4>Registar</h4>
                        </button>
                    </NavLink>

                </div>
            </div>
        )
    }
}


export default withRouter(MyAccountNav)
