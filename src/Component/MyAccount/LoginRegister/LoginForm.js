import React, { Component } from 'react'
import {
    FacebookLoginButton,
    GoogleLoginButton,
    TwitterLoginButton,
} from "react-social-login-buttons"
import { Link } from 'react-router-dom'
import { LoginContext } from '../../Context/LoginContext'

class LoginForm extends Component {
    render() {
        return (
            <LoginContext.Consumer>
                {(props) => (
                    <div className="container py-4">
                        <form>
                            <div className="form-group social-login mx-auto">
                                <FacebookLoginButton iconSize="20px" align="center">
                                    <span style={{ fontSize: 16 }}>Entrar com Facebook</span>
                                </FacebookLoginButton>
                            </div>
                            <div className="form-group social-login mx-auto">
                                <GoogleLoginButton iconSize="20px" align="center">
                                    <span style={{ fontSize: 16 }}>Entrar com Google</span>
                                </GoogleLoginButton>
                            </div>
                            <div className="form-group social-login mx-auto">
                                <TwitterLoginButton iconSize="20px" align="center">
                                    <span style={{ fontSize: 16 }}>Entrar com Twitter</span>
                                </TwitterLoginButton>
                            </div>
                            <div className="h6 text-muted py-5">OU</div>
                            <div className="form-group social-login mx-auto">
                                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                            </div>
                            <div className="form-group social-login mx-auto">
                                <input type="password" className="form-control" id="Password" placeholder="Password" />
                            </div>
                            <div className="social-login p-3">
                                <div className="p text-justify" style={{ fontSize: 14 }}>
                                    <Link to={''}>Esqueceu-se da password?</Link>
                                </div>
                            </div>
                            <div className="social-login mx-auto pt-3">
                                <button type="submit" className="btn btn-primary w-50" onClick={e => {
                                    e.preventDefault()
                                }}>Entrar</button>
                            </div>
                        </form>
                    </div>
                )}
            </LoginContext.Consumer>
        )
    }
}

LoginForm.contextType = LoginContext
export default LoginForm
