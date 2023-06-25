import React, { useState, useReducer } from 'react'


const ACTIONS = {
    ADD_TODO: 'add-todo',
    TOOGLE_TODO: 'toogle-todo',
    DELETE_TODO: 'delete-todo'
}

const reducer = (todos, action) => {
    switch (action.type) {
        case ACTIONS.ADD_TODO:
            return [...todos, newTodo(action.payload.name)];
        case ACTIONS.TOOGLE_TODO:
            return todos.map(todo => {
                if (todo.id === action.payload.id) {
                    console.log("working or not");
                    return { ...todo, complete: !todo.complete }
                }
                return todo;
            });
        case ACTIONS.DELETE_TODO:
            return todos.filter((element) => element.id !== action.payload.id);
        default:
            return todos;
    }
}

const newTodo = (name) => {
    return { id: Date.now(), name: name, complete: false }
}


const TodoReducer = () => {
    const [name, setname] = useState("");
    const [todos, dispatch] = useReducer(reducer, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
        setname("")
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={e => setname(e.target.value)} />
            </form>
            {
                todos.map((element) => {
                    return (<div>
                        <span key={element.id} style={{ color: element.complete ? 'yellow' : "black" }}>{element.name}</span>
                        <button onClick={() => dispatch({ type: ACTIONS.TOOGLE_TODO, payload: { id: element.id } })}>Toggle</button>
                        <button onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: element.id } })}>Delete</button>
                    </div>)
                })
            }
        </>
    )
}

export default TodoReducer
