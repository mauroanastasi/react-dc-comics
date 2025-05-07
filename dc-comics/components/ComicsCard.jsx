import React from 'react'

const ComicsCard = (props) => {
    return (
        <div className='comic-card'>
            <img src={props.src} alt="Deluxeed" />
            <h6>{props.title}</h6>
        </div>
    )
}

export default ComicsCard;
