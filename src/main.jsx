import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppS from './amashop/App'
import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './store/dataSlice'
import { Provider } from 'react-redux'
import loadingSlice from './store/loadingSlice'

const store = configureStore({
  reducer: {
    data: dataSlice.reducer,
    loading: loadingSlice.reducer
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      {window.location.href.includes('shop') ? <AppS /> : <App /> }
    </Provider>
  </React.StrictMode>,
)
