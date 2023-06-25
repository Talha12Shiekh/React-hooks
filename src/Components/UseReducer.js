import React, { useReducer } from 'react'

const initialvalue = 0;

const ACTIONS = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
}

const reducer = (state, action) => {
  if (action.type === ACTIONS.INCREMENT) {
    return state + 1;
  }
  if (action.type === ACTIONS.DECREMENT) {
    if (state < 1) {
      return state = 0;
    }
    return state - 1;
    
  }
  return state;
}



const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialvalue);
  
  return (
    <div className='parentDiv'>
      <div className='useReducerdiv'>
        <p>{state}</p>
        <div className="btns">
          <button className='btnreducer' onClick={() => dispatch({ type: ACTIONS.INCREMENT })}>Increment</button>
          <button className='btnreducer' onClick={() => dispatch({ type: ACTIONS.DECREMENT })}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default UseReducer
