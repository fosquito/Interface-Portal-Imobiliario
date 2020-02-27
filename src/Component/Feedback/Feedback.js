import React from 'react'
import AdsNumber from './AdsNumber'
import FeedbackCarrocel from './FeedbackCarrocel'

function Feedback() {
    return (
        <section id="feedback">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-4 justify-content-center">
                        <AdsNumber />
                    </div>
                    <div className="col-md-8 py-5 bg-secondary">
                        <FeedbackCarrocel />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback
