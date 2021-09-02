import React, { useContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './components/AppRouter'
import { CssBaseline } from '@material-ui/core'
import { Context } from './Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from './components/Loader'

function App(): JSX.Element {
    const { auth } = useContext(Context)
    const [user, loading, error] = useAuthState(auth)

    if (loading) return <Loader />
    return (
        <BrowserRouter>
            <CssBaseline />
            <Navbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
