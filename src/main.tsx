import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { context, Context } from './Firebase'

ReactDOM.render(
    <Context.Provider value={context}>
        <App />
    </Context.Provider>,
    document.getElementById('root')
)
