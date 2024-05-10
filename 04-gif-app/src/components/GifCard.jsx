import React from 'react'

const GifCard = ({ title, url }) => {
    
    return (
        <div className='card'>
            <img src={url} alt="" />
            <p>{title}</p>
        </div>
    )
}

export default GifCard

