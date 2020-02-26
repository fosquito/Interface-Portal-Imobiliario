import React, { Component } from 'react'

class AdsNumber extends Component {
    constructor(props) {
        super(props)

        this.state = {
            adsNumber: Math.floor((new Date().getTime() - new Date("January 01, 2020").getTime()) / (1000 * 60))
        }
    }

    componentDidMount = () => {
        this.myInterval = setInterval(() => {
            this.setState({
                adsNumber: Math.floor((new Date().getTime() - new Date("January 01, 2020").getTime()) / (1000 * 60))
            })
        }, 1000)
    }

    render() {
        const { adsNumber } = this.state
        return (
            <React.Fragment>
                <div className="h3 pt-5 text-center">Anúncios publicados no nosso site</div>
                <div className="h1 pt-2 d-flex justify-content-center text-primary">{Math.floor(adsNumber / 76)}</div>
                <div className="h3 pt-5 text-center">Anúncios seguros encontrados na internet</div>
                <div className="h1 pt-2 d-flex justify-content-center text-primary">{adsNumber}</div>
               
            </React.Fragment>
        )
    }
}

export default AdsNumber
