import React from 'react';
import { useSelector ,useDispatch} from 'react-redux';  
import {Increment, Multiplication,Decrement,Divison } from './Actions/action';

const Redux = () => {
    const my1stState = useSelector(state => state.changeTheNumber);
    const my2ndState = useSelector(state => state.MuliDiviTheNumber);
    console.log(my2ndState);
    const dispatch = useDispatch()
    return (
        <>
            <div className='parentDiv'>
                <div className='useReducerdiv'>
                    <p>{my1stState}</p>
                    <div className="btns">
                        <button className='btnreducer'
                        onClick={() => dispatch(Increment(5))}
                        >Increment</button>
                        <button className='btnreducer'
                        onClick={() => dispatch(Decrement(5))}
                        >Decrement</button>
                    </div>
                </div>
                <div className='useReducerdiv'>
                    <p>{my2ndState}</p>
                    <div className="btns">
                        <button className='btnreducer'
                          onClick={() => dispatch(Multiplication(5))}
                        >Multiplication</button>
                        <button className='btnreducer'
                         onClick={() => dispatch(Divison(5))}
                        >Divison</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Redux
