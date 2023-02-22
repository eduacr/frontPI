import React from "react";
import locations from './locations'


const Category = ({img, category, id}) => {
    
    return(
        <div className="card Category">
            <h3>Buscar por tipo de alojamiento</h3>
            <p></p>
            {locations.map((item) => (
                <div className="card" key={item.id}>
                    <div className='img-container listado'><img src={item.img} alt={item.title}/></div>
                    <h4>{item.category}</h4>
                </div>
            ))}
        </div>
    )
}
export default Category