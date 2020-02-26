import React from 'react'
import AdsNumber from './AdsNumber'
import FeddbackCarrocel from './FeddbackCarrocel'

function Feedback() {
    return (
        <section id="feedback">
            <div className="container py-5">
                <div className="row">
                    <div className="col-4 justify-content-center">
                        <AdsNumber />
                    </div>
                    <div className="col-8 justify-content-center">
                        <FeddbackCarrocel />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback
