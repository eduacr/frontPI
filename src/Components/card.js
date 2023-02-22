import React from 'react'
import locations from './locations'


const Card = () => {
    
    return (
        <div className="card">
            {locations.map((item) => (
                <div className="card" key={item.id}>
                    <div className='img-container listado'><img src={item.img} alt={item.title}/></div>
                        <div>
                            <h3>{item.category}</h3>
                            <h4>{item.title}</h4>
                            <h5>{item.location}</h5>
                            <p>{item.description}</p>
                            <button>Ver detalle</button>
                        </div>
                </div>
            ))}
        </div>
    )



}


export default Card