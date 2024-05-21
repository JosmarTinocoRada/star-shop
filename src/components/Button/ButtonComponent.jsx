//Para recibir la propiedd, podemos 
//1. Colocando el argumento props en la función del componente
//

// function myFuncion (num, numTwo) {}
import React from 'react'

export const ButtonComponent = (props) => {
    console.log(props);
  return (
    <button title={props.description}>
        {props.label}
    </button>
  )
}

export default ButtonComponent;