import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
const CartWidgetComponent = () => {
    const customStyle= {color: "white", 
    fontSize: "1.2rem", 
    marginRight:"0,5rem"}
  return (
    <div>
        <FontAwesomeIcon icon={faCartPlus} style={customStyle} />
        <span style={customStyle}>1</span>
    </div>
  )
}

export default CartWidgetComponent