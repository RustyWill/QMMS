import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'       // make sure this exists!
import App from './App'    // pulls in the default export

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')  // matches <div id="root"></div> in public/index.html
)
