import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import store from './Components/ReactRedux/Store';
import {Provider} from "react-redux"
import TodoStore from './Components/Redux Project/Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store={TodoStore}>
    <App />
  </Provider>
 </React.StrictMode>
);

