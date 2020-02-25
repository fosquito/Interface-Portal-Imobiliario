import React from 'react'

function Header() {
    return (
        <section id="header">
            <div className="bg-primary">
                <div className="container py-5">
                    <div className="row d-flex justify-content-center pt-5">
                        <h2 className="text-light">Something here</h2>
                    </div>
                    <div className="row d-flex justify-content-center">
                        <p className="text-light">Something here</p>
                    </div>
                    <div className="row d-flex justify-content-center py-5">
                        <button className="btn btn-secondary"><h3>Encontre o seu imóvel</h3></button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
