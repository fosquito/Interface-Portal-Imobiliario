import React from 'react'
import Header from './Header/Header'
import WhyUs from './WhyUs/WhyUs'
import Feedback from './Feedback/Feedback'
import Footer1 from './Footer/Footer1'

function HomePage() {
    return (
        <div className="position-absolute w-100">
            <Header />
            <WhyUs />
            <Feedback />
            <Footer1 />
        </div>
    )
}

export default HomePage
