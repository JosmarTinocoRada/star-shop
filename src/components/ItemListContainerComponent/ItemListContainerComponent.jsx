import React from 'react'

const ItemListContainerComponent = ({greeting}) => {
    const customStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        color: "white",
        fontSize: "1.5rem",
        width: "100vw",
        height: "80vh",
    }
  return (
    <div style={customStyle}>{greeting}</div>
  )
}

export default ItemListContainerComponent