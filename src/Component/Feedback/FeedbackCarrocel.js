import React, { Component } from 'react'
import jsonData from './Feedback.json'
import Message from './Message.js'

export class FeedbackCarrocel extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             feedbackData: []
        }
    }
    
    render() {
        const feedbackList = Object.keys(jsonData).map((key, index) => <Message key={key} message={jsonData[key]} />)
        return (
            <div>
                {feedbackList}
            </div>
        )
    }
}

export default FeedbackCarrocel



