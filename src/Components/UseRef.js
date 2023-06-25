import React, { useRef, useState, useEffect } from 'react'

const UseRef = () => {

    const [show, setshow] = useState(false);
    // const [count,setcount] = useState();
    const [myData, setmyData] = useState("");

    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    }, [myData]);

    const luckyName = useRef(null);
    const inputElement = useRef("");
    const video = useRef()

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = luckyName.current.value;
        name === "" ? alert("Please fill the above field") : setshow(true);
    }

    const changeStyle = () => {
        inputElement.current.style.background = 'green';
        inputElement.current.focus()
    }

    const handlePlay = ()=>{
        video.current.play();
    }
    const handlePause = ()=>{
        video.current.pause();
    }

    return (
        <>
            <div className='UseRefParentdiv'>
                <div>
                    <form action="#" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="luckyName">Enter your lucky name</label>
                            <input type="text" id='luckyName' ref={luckyName} />
                        </div>
                        <br />
                        <button>Submit</button>
                    </form>
                    <h3 style={{ color: 'white' }}>{show ? `Your Lucky name is ${luckyName.current.value}` : ""}</h3>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <input type="text" ref={inputElement} value={myData} onChange={(e) => setmyData(e.target.value)} />
                    <h3 style={{ color: 'white' }}>The number of times it render is : {count.current}</h3>
                    <button onClick={changeStyle} className="btn">Submit</button>
                </div>
            </div>
            <br />
            <div className='UseRefParentdiv2'>
                <div className="grid-btn">
                    <button className="btn" onClick={handlePlay}>Play</button>
                    <button className="btn" onClick={handlePause}>Pause</button>
                </div>
                <video width="520" height="240" ref={video} >
                    <source src='/Videos/video.mp4'/>
                </video>
            </div>
        </>
    )
}

export default UseRef
