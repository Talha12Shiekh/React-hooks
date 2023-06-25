import React, { useEffect, useState } from 'react';
import useCustomHooks from "./useCustomHooks";

const UseEffect1 = () => {

  const [count, setcount] = useState(0);
  const [widthcount, setwidthcount] = useState(window.screen.width);

  const actualWidth = () => {
    setwidthcount(window.innerWidth)
  }

  useEffect(() => {
    console.log("Event added");
    window.addEventListener("resize", actualWidth);

    return () => {
      console.log("Event removed");
      window.removeEventListener("resize", actualWidth);
    }
  }, [widthcount])

  // useEffect(() => {
  //   count > 0 ? document.title = `Chats (${count})` : document.title = `Chats`
  // }, [count]);

  // creating a custom hook except writing it
 useCustomHooks(count);

  return (
    <div className='useEffect'>
      <div>
        <h1>{count}</h1>
        <button className="btn" onClick={() => setcount(count + 1)}>Click 😄</button>
      </div>
      <div>
        <h2 style={{ color: "white" }}>The actual Width of windows is : </h2>
        <h3 style={{ textAlign: 'center', fontSize: 'xx-large', marginTop: '1em' }}>{widthcount}</h3>
      </div>
    </div>
  )
}

export default UseEffect1
