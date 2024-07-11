import React from 'react'
import "./App.css";

const HAD = ({heading,description}) => {
  return (
    <div>
        <h1 className='heading autoLeftRight'>{heading}</h1>
        <p className='description autoLeftRight'>{description}</p>
    </div>
  )
}

export default HAD