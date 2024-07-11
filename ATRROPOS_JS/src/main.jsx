import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import 'atropos/css'
import Scroll from './Scroll.jsx';
import Scale from './Scale.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Scale />
  </React.StrictMode>,
)
