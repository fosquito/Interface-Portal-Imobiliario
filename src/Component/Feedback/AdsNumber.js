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
                <div className="h4 d-flex justify-content-center">Anúncios publicados</div>
                <div className="h2 d-flex justify-content-center text-primary">{Math.floor(adsNumber / 76)}</div>
                <div className="h4 pt-5 d-flex justify-content-center">Anúncios encontrados</div>
                <div className="h2 d-flex justify-content-center text-primary">{adsNumber}</div>
               
            </React.Fragment>
        )
    }
}

export default AdsNumber
