import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppS from './amashop/App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {window.location.href.includes('shop') ? <AppS /> : <App /> }
  </React.StrictMode>,
)
