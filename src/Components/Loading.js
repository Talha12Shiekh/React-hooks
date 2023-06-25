import React from 'react'
import { useContext } from 'react';
import { FirstName,LastName } from './UseContext';


const Loading = () => {
  const fname = useContext(FirstName);
  const lname = useContext(LastName);
  
  return (
    <div>
    {/* doing it by consumer  */}
      {/* <BioData.Consumer> {(name) => {
        return  <h1 className='loadingDiv'>{name}</h1>
      }} </BioData.Consumer> */}
      <h1 className='loadingDiv'>My name is {fname}  ☠ {lname}</h1>
    </div>
  )
}

export default Loading
