import React, { useEffect, useState } from 'react'
import locations from '../locations'
import "./Card.css";


const Card = () => {
       

    return (
        <div className="card-main">
            {locations.map((item) => (
                <div className="card" key={item.id}>
                    <div className='img-container-listado'><img className='img1' src={item.img} alt={item.title}/></div>
                        <div className='card-text'>
                            <div className='top'><h5>{item.category}</h5></div>
                            <div className='card-h5-container'><h5>{item.title}</h5></div>
                            {/* <h5>{item.location}</h5> */}
                            <div className='card-text'><p>{item.description}</p></div>
                            <button className="card-button">Ver más</button>
                        </div>
                </div>
            ))}
        </div>
    )


            
}


export default Card