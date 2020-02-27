import React from 'react'

function Message({ message }) {
    return (
        <div className="container-fluid">
            <div className="row h4 pt-5 text-light">
                "{message.text}"
            </div>
            <div className="row pt-1 text-lightGrey h5">
                {message.personal.name}
            </div>

        </div>
    )
}

export default Message
