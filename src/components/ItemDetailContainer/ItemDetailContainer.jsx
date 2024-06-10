import React from 'react'

const ItemDetailContainer = ({ product }) => {
  return (
    <div>
       
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <img src={product.images} alt={product.title} style={{width: 200, height: 200}}/>
        <p>{product.price}</p>
    </div>
  )
}

export default ItemDetailContainer