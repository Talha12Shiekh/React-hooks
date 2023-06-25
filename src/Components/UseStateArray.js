import React from 'react'
import { useState } from 'react';

const UseStateArray = () => {
    const bioData = [
        {
            id: 0, myName: "Talha", age: "15"
        },
        {
            id: 1, myName: "Shiekh", age: "16"
        }
    ];
    const [myArray, setmyArray] = useState(bioData);

    const [myobject, setmyobject] = useState({
        Description: "This will update on Clicking the update button"
    });
    const clearArray = () => {
        setmyArray([]);
    }

    const removeElem = (id) => {
        // alert(id)
        const newArray = myArray.filter((element) => {
            return element.id !== id;
        } );

        setmyArray(newArray);
    }
    const changeObject = () => {
        setmyobject({
            ...myobject, Description: "It is updated Thank you"
        })
    }
    return (
        <>
            {
                myArray.map((element) => {
                    return (
                        <h1 className='h1style' key={element.id}>Name : {element.myName} & Age : {element.age}
                        <button className='btnInner' onClick={() => removeElem(element.id)}>remove</button>
                        </h1>
                    );
                })
            }
            <h1 className='h1style' style={{color:'black'}}>{myobject.Description}</h1>
            <div className="buttons">
                <button className='btn' onClick={clearArray}>Clear</button>
                <button className='btn' onClick={changeObject}>Update</button>
            </div>
        </>
    )
}

export default UseStateArray
