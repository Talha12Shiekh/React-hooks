import React, { useState, useEffect } from 'react';
import "./Todo.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// to get the data from localStorage

const getLocalItems = () => {
    let lists = localStorage.getItem("lists")

    if (lists) {
        return JSON.parse(localStorage.getItem("lists"))
    } else {
        return []
    }
}


const TodoApp = () => {

    const [inputdata, setinputdata] = useState("");
    const [items, setitems] = useState(getLocalItems());
    const [togglebtn, settogglebtn] = useState(true);
    const [iseditItem, setiseditItem] = useState(null);


    useEffect(() => {
        localStorage.setItem("lists", JSON.stringify(items))
    }, [items]);



    const addItem = () => {
        if (!inputdata) {
            toast.error('🦄 You can not add empty list', {
                position: "top-right",
                autoClose: 900,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
        } else if (inputdata && !togglebtn) {
            setitems(
                items.map((element) => {
                    if (element.id === iseditItem) {
                        return { ...element, name:inputdata}
                    }
                    return element;
                })
            );
            toast.info('🦄 Item edited successfully', {
                position: "top-center",
                autoClose: 900,
                hideProgressBar: true,
                });
            settogglebtn(true)
            setinputdata("")
            setiseditItem(null)
        }
        else {
            toast.success('🦄 Item added successfully', {
                position: "top-left",
                autoClose: 900,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined
            });
            const allInputData = { id: Date.now(), name: inputdata }
            setitems([...items, allInputData]);
            setinputdata("")
        }
    }

    const deleteItem = (id) => {

        const updatedItems = items.filter((element) => {
            return id !== element.id;
        });

        setitems(updatedItems)
    }

    const removeAll = (confirm) => {
        if (confirm) {
            setitems([]);
        }
    }

    const editItem = (id) => {
        let newEditItem = items.find((element) => {
            return element.id === id;
        });
        settogglebtn(false)
        setinputdata(newEditItem.name)
        setiseditItem(id)
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="https://raw.githubusercontent.com/thapatechnical/reacttodo/30bbf0f3648eff1cafa4c2da5546cf8b9a2e95ad/public/images/todo.svg" alt="TodoLogo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>
                    <div className="addItems">
                        <input type="text" placeholder='✍ Add Items...' value={inputdata} onChange={(e) => setinputdata(e.target.value)} />
                        {togglebtn ? <i className="fa-solid fa fa-plus add-btn" title='Add Item' onClick={addItem}></i> : <i className="fa-light fa-pen-to-square add-btn far fa-edit" title='Edit item' onClick={addItem}></i>}
                    </div>

                    <div className="showItems">
                        {items.map((element) => {
                            return (
                                <div className="eachItem" key={element.id}>
                                    <h3>{element.name}</h3>
                                    <div className="todo-btn">
                                        <i className="fa-light fa-pen-to-square add-btn far fa-edit" title='Edit item' onClick={() => editItem(element.id)}></i>
                                        <i className="far fa-solid fa-trash-alt add-btn" title='Delete Item' onClick={() => deleteItem(element.id)}></i>
                                    </div>
                                </div>)
                        })}
                    </div>

                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={() => removeAll(window.confirm("Do you want to delete all items"))}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}

export default TodoApp
