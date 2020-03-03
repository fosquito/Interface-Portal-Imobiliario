import React, { Component } from 'react'
import {
    FacebookLoginButton,
    GoogleLoginButton,
    TwitterLoginButton,
} from "react-social-login-buttons";
import { Link } from 'react-router-dom';

class RegisterForm extends Component {
    render() {
        return (
            <div className="container py-4">
                <form>
                    <div className="form-group social-login mx-auto">
                        <FacebookLoginButton iconSize="20px" align="center">
                            <span style={{ fontSize: 16 }}>Registar com Facebook</span>
                        </FacebookLoginButton>
                    </div>
                    <div className="form-group social-login mx-auto">
                        <GoogleLoginButton iconSize="20px" align="center">
                            <span style={{ fontSize: 16 }}>Registar com Google</span>
                        </GoogleLoginButton>
                    </div>
                    <div className="form-group social-login mx-auto">
                        <TwitterLoginButton iconSize="20px" align="center">
                            <span style={{ fontSize: 16 }}>Registar com Twitter</span>
                        </TwitterLoginButton>
                    </div>
                    <div className="h6 text-muted py-5">OU</div>
                    <div className="form-group social-login mx-auto">
                        <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Nome e Sobrenome" />
                    </div>
                    <div className="form-group social-login mx-auto">
                        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" />
                    </div>
                    <div className="form-group social-login mx-auto">
                        <input type="password" class="form-control" id="Password" placeholder="Password" />
                    </div>
                    <div className="form-group social-login mx-auto">
                        <input type="password" class="form-control" id="ConfirmPassword" placeholder="Confirmar Password" />
                    </div>
                    <div className="social-login p-3">
                        <div className="p text-justify" style={{ fontSize: 12 }}>
                            Ao clicar no botão registar aceito os
                            <Link> Termos e Condições</Link>
                        </div>
                    </div>
                    <div className="social-login px-3">
                        <div className="p text-justify" style={{ fontSize: 12 }}>
                            Reconheço que o site utiliza a minha informação pessoal de acordo com a
                           <Link> Política de Privacidade</Link> e com a
                           <Link> Política de Cookies e Tecnologias Semelhantes</Link>.
                             Este site usa sistemas automatizados e parceiros para analisar o meu uso de serviços e facultar
                             funcionalidades de produto relevantes, conteúdo, publicidade visada e baseada nos meus interesses,
                              bem como proteção contra spam, malware e utilização não autorizada.
                        </div>
                    </div>
                    <div className="social-login p-3">
                        <div className="p text-justify" style={{ fontSize: 12 }}>
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                            Receber informações de imóveis, notícias e outras comunicações promocionais através do email.
                        </div>
                    </div>
                    <div className="social-login mx-auto py-4">
                        <button type="submit" class="btn btn-primary w-50">Registar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default RegisterForm
