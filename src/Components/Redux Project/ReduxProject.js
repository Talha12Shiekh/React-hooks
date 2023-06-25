import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import "../Todo.css";
import { addTodo, DeleteTodo, RemoveTodo } from './Actions/Action';


const ReduxProject = () => {

    const [value,setvalue] = useState("");
    const lists = useSelector(state => state.TodoReducer.lists);
    const dispatch = useDispatch();

    const addTodoitems = () =>{
        dispatch(addTodo(value));
        setvalue("");
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
                        <input type="text" placeholder='✍ Add Items...' value={value} onChange={(e) => setvalue(e.target.value)}/>
                        <i className="fa-solid fa fa-plus add-btn" title='Add Item'
                       onClick={addTodoitems}
                        ></i>
                    </div>

                    <div className="showItems">

                                {
                                    lists.map((element) => {
                                        return    <div className="eachItem" key={element.id}>
                                                <h3>{element.data}</h3>
                                                <div className="todo-btn">
                                                <button className='trash-btn'>
                                                <i className="far fa-solid fa-trash-alt add-btn" title='Delete Item' onClick={() => dispatch(DeleteTodo(element.id))}></i></button> 
                                                </div>
                                            </div>
                                    })
                                }

                    </div>

                    <div className="showItems">
                        <button className='btn effect04' data-sm-link-text="Remove All" onClick={() => dispatch(RemoveTodo())}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default ReduxProject
