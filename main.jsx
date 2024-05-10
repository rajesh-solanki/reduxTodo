import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import store from './reduxTodo/store'
import './index.css'
// import { Counter } from './Counter.jsx'
import { Provider } from 'react-redux'
import Todo from './reduxTodo/Todo'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <Counter /> */}
    <Todo />
    
  </Provider>

)
