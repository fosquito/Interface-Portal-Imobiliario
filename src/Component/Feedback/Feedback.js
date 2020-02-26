import React from 'react'
import AdsNumber from './AdsNumber'
import FeedbackCarrocel from './FeedbackCarrocel'

function Feedback() {
    return (
        <section id="feedback">
            <div className="container py-5">
                <div className="row">
                    <div className="col-4 justify-content-center">
                        <AdsNumber />
                    </div>
                    <div className="col-8 justify-content-center">
                        <FeedbackCarrocel />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feedback
