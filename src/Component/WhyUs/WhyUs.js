import React from 'react'

function WhyUs() {
    return (
        <section id="whyUs">
            <div className="container h1 py-5">
                <div className="row">
                    <div className="col-12 py-5 h1 text-center text-secondary">Porquê nós?</div>
                </div>
                <div className="row d-flex">
                    <div className="col-lg-4 pb-5 justify-content-center">
                        <div className="h1 text-center border w-50 mx-auto h-50 text-lightGrey">Icon</div>
                        <div className="h3 text-center text-tertiary">Casas reais</div>
                        <div className="text-center p-4 h6 text-primary">Apenas são aceites anúncios de imóveis com imagens, localização e contacto telefónico. Desta forma, asseguramos que os anúncios são verdadeiros.</div>
                    </div>
                    <div className="col-lg-4 pb-5 justify-content-center">
                        <div className="h1 text-center border w-50 mx-auto h-50 text-lightGrey">Icon</div>
                        <div className="h3 text-center text-tertiary">Agentes virtuais</div>
                        <div className="text-center p-4 h6 text-primary">Foram desenvolvidos agentes virtuais que pesquisam na internet por anúncios de imóveis. Estes asseguram-se que os imóveis encontrados são reais e dispõem de toda a informação necessária.</div>
                    </div>
                    <div className="col-lg-4 pb-5 justify-content-center">
                        <div className="h1 text-center border w-50 mx-auto h-50 text-lightGrey">Icon</div>
                        <div className="h3 text-center text-tertiary">Apoio ao cliente</div>
                        <div className="text-center p-4 h6 text-primary">Dispomos de um serviço de apoio ao cliente. Repondemos às suas dúvidas ou queixas dentro de 24 horas úteis. Procuramos sempre satisfazer os nossos clientes.</div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default WhyUs
