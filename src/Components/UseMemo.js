import React, { useState, useMemo } from 'react'

const UseMemo = () => {
    const [show, setshow] = useState(false);
    const [myNum, setmyNum] = useState(0);

    const getValue = () => {
        return setmyNum(myNum + 1)
    }

    const countNumber = (num) => {
        console.log(num);
        for (let i = 0; i <= 100000000; i++) { }
        return num;
    }


    const checkData = useMemo(() => {
        return countNumber(myNum)
    }, [myNum])


    return (
        <div>
            <button className='btn' style={{ margin: '0 auto', display: 'block', background: 'red' }} onClick={getValue}>Counter</button>

            <p>My new number is : {checkData}</p>

            <button className='btn' style={{ margin: '0 auto', display: 'block', background: 'orange' }} onClick={() => setshow(!show)}>
                {show ? "You clicked me" : "Click me please"}
            </button>
        </div>
    )
}

export default UseMemo
