import React, { Component } from 'react'
import {
    FacebookLoginButton,
    GoogleLoginButton,
    TwitterLoginButton,
} from "react-social-login-buttons";

class LoginForm extends Component {

    render() {

        return (
            <div className="container py-4">
                <form>
                    <div className="form-group social-login mx-auto py-1">
                        <FacebookLoginButton iconSize="20px" align="center">
                            <span style={{ fontSize: 16 }}>Entrar com Facebook</span>
                        </FacebookLoginButton>
                    </div>
                    <div className="form-group social-login mx-auto py-1">
                        <GoogleLoginButton iconSize="20px" align="center">
                            <span style={{ fontSize: 16 }}>Entrar com Google</span>
                        </GoogleLoginButton>
                    </div>
                    <div className="form-group social-login mx-auto py-1">
                        <TwitterLoginButton iconSize="20px" align="center">
                            <span style={{ fontSize: 16 }}>Entrar com Twitter</span>
                        </TwitterLoginButton>
                    </div>
                    <div className="h6 text-muted py-4">OU</div>
                    <div className="form-group social-login mx-auto py-1">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div className="form-group social-login mx-auto py-1">
                        <input type="password" class="form-control" id="Password" placeholder="Password" />
                    </div>
                    <div className="social-login mx-auto py-4">
                        <button type="submit" class="btn btn-primary w-50">Submit</button>
                    </div>
                </form>
            </div>

        )
    }
}

export default LoginForm
