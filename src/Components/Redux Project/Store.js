import { createStore } from "redux";

import rootTodoReducer from "./Reducers/RootReducer";

const Todostore = createStore(rootTodoReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default Todostore;