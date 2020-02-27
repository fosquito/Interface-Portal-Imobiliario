import React from 'react'
import ReactTimeAgo from 'react-time-ago'
import pt from 'javascript-time-ago/locale/pt'
import JavascriptTimeAgo from 'javascript-time-ago'

JavascriptTimeAgo.locale(pt)

function Message({ message }) {
    const { personal, text, date } = message

    return (
        <div className="container-fluid">
            <div className="row h4 pt-5 text-light">
                "{text}"
            </div>
            <div className="row pt-1 text-light h5">
                {personal.name}
            </div>
            <div className="row pt-1 text-lightGrey justify-content-center">
                    <ReactTimeAgo date={Date.parse(date)} locale="pt" />
            </div>
        </div>
    )
}

export default Message
