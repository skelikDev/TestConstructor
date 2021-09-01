import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { CssBaseline } from '@material-ui/core'

function App(): JSX.Element {
    return (
        <BrowserRouter>
            <CssBaseline />
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
