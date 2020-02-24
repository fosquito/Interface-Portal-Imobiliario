import React from 'react'

function Header() {
    return (
        <div className="bg-primary">
            <div className="container py-5">
                <div className="row d-flex justify-content-center pt-5">
                    <h2 className="text-light">Escrever aqui qualquer coisa</h2>
                </div>
                <div className="row d-flex justify-content-center">
                    <p className="text-light">Aqui também é preciso escrever qualquer coisa</p>
                </div>
                <div className="row d-flex justify-content-center py-5">
                    <button className="btn btn-secondary"><h3>Encontre o seu imóvel</h3></button>
                </div>
            </div>
        </div>
    )
}

export default Header
