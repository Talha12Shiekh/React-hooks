import React, { useState } from 'react';

const App = () => {
  console.log(useState())

  const [myname, setmyname] = useState("Talha shiekh");

  const changeName = () => {
    myname === "TK DON" ? setmyname("Talha shiekh"):setmyname("TK DON");
  }

  return (
    <div>
      <h1>{myname}</h1>
      <button onClick={changeName}>Click me please</button>
    </div>
  )
}

export default App
