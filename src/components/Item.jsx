import React from 'react'
import { Link } from 'react-router-dom'
import "./styles/Item.css";

function Item(product) {
  return (
    <div className='card' style={{width: "18rem"}}>
        <img src={product.img} className='card-img-top'></img>
        <div className='card-body'>
              <h2 className='card-title'>{product.name}</h2>
              <p className="price">${product.price}</p>
              <p className="description">{product.description}</p>
              <Link to={`/detail/${product.id}`}>Detalles del BMW</Link>
      </div>
    </div>
  )
}

export default Item