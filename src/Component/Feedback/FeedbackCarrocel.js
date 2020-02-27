import React, { Component } from 'react'
import jsonData from './Feedback.json'
import Message from './Message.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

export class FeedbackCarrocel extends Component {
    constructor(props) {
        super(props)

        this.state = {
            feedbackData: []
        }
    }

    render() {

        const settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            arrows: false,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnHover: true,
            className: "slides"
        }

        return (
            <div className="container-fluid">
                <div className="row h2 text-light justify-content-center">
                    Feedback dos nossos utilizadores
                </div>
                <Slider {...settings}>
                    {jsonData.map(data => {
                        return (
                            <Message key={data._id} message={data} />
                        )
                    })}
                </Slider>
            </div>
        )
    }
}

export default FeedbackCarrocel



