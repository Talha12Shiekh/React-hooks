import React from 'react'
import { createContext } from 'react';
import Loading from './Loading';

const FirstName = createContext();
const LastName = createContext();

const UseContext = () => {
  return (
    <FirstName.Provider value={"Talha"}>
    <LastName.Provider value={"Shiekh"}>
      <Loading  />
    </LastName.Provider>
    </FirstName.Provider>
  )

}

export default UseContext;
export {FirstName,LastName};
