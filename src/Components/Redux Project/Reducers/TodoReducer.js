const initialdata = {
    lists : []
}

const TodoReducer = (state=initialdata,action) =>{
    switch (action.type) {
        case "ADDTODO":
            const {id,data} = action.payload;
            return {
                ...state,lists:[...state.lists,{id:id,data:data}]
            }

        case "DELETE_TODO":
            const newList =  state.lists.filter(element => element.id !== action.payload.id)
             return {
                 ...state,lists:newList
             }

        case "REMOVE_TODO":
             return {
                 ...state,lists:[]
             }
        default:
            return state;
    }
}

export default TodoReducer;