import React from 'react'

function FooterMenu() {
    return (
        <React.Fragment>
            <li className="list-group-item border-0">
                        <button className="btn btn-light text-muted">Sobre nós</button>
                    </li>
                    <li className="list-group-item border-0">
                        <button className="btn btn-light text-muted">Regras</button>
                    </li>
                    <li className="list-group-item border-0">
                        <button className="btn btn-light text-muted">Privacidade</button>
                    </li>
                    <li className="list-group-item border-0">
                        <button className="btn btn-light text-muted">Ajuda</button>
                    </li>
        </React.Fragment>
    )
}

export default FooterMenu
