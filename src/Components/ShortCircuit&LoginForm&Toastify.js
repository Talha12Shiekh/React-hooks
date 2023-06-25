import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShortCircuitLoginFormToastify = () => {

    // code of short circuit evaluation
    // const [demo, setdemo] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [allEntry, setallEntry] = useState([]);


    const SubmitForm = (e) => {
        e.preventDefault();
        if (email && password) {  
            const newEntry = { id: new Date().getTime().toString(), email, password };
            setallEntry([...allEntry, newEntry]);
    
            setemail("");
            setpassword("")
        } else {
            alert("Please fill all the fields")
        }
    }

    const handleEmail = (e) => {
        setemail(e.target.value);
    }

    const handlePassword = (e) => {
        setpassword(e.target.value);
    }

    const diffToast = () => {
        toast.error('🦄 Logged in unsuccessfully', {
            position: "top-center",
            });
        toast('🦄 Logged in unsuccessfully', {
            position: "top-right",
            });
        toast.warn('🦄 Logged in unsuccessfully', {
            position: "top-left",
            });
        toast.success('🦄 Logged in unsuccessfully', {
            position: "bottom-left",
            });
        toast.info('🦄 Logged in unsuccessfully', {
            position: "bottom-right",
            });
    }

    return (
        <>
            {/* // code of short circuit evaluation */}
            {/* <h1 className='h1style'>{ demo || <><h1>Talha is the best in the world</h1></> }</h1>
            <h1 className='h1style'>{ demo && "shiekh"}</h1> */}

            {/* // code of login form  */}
            <div>
                <form autoComplete="off" onSubmit={SubmitForm}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name='email' id='email' required autoComplete="off" value={email} onChange={handleEmail} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input type="password" name='password' id='password' required autoComplete="off" value={password} onChange={handlePassword} />
                    </div>
                    <button type="submit" onClick={diffToast}>Login</button>
                </form>
                <ToastContainer />
            </div>
            <div>
                {
                    allEntry.map((element) => {
                        const { id, email, password } = element;
                        return (
                            <div className='showDataStyle' key={id}>
                                <p>{email}</p>
                                <p>{password}</p>
                            </div>
                        )
                    })
                }
            </div>
           
        </>
    );
}

export default ShortCircuitLoginFormToastify;