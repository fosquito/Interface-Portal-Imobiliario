import React, { Component } from 'react'
import {
    FacebookLoginButton,
    GoogleLoginButton,
    TwitterLoginButton,
} from "react-social-login-buttons";

class LoginForm extends Component {

    render() {

        return (
            <div className="container py-5">
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
                    
                </form>
            </div>

        )
    }
}

export default LoginForm
