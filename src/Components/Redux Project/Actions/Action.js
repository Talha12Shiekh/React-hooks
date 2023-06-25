export const addTodo = (inputval) => {
    return {
        type :"ADDTODO",
        payload: {
            id: Date.now(),
            data : inputval
        }
    }
}

export const DeleteTodo = (id) => {
    return {
        type :"DELETE_TODO",
        id
    }
}

export const RemoveTodo = () => {
    return {
        type :"REMOVE_TODO",

    }
}