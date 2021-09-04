import React, { useEffect } from 'react'
import './App.css'
import { Box, Container, CssBaseline } from '@material-ui/core'
import { firebaseOctopus } from './FirebaseOctopus'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import AppRouter from './routes/AppRouter'
import { useAuthState } from 'react-firebase-hooks/auth'
import Loader from './components/Loader'
import { debug } from './env'

const App = (): JSX.Element => {
    debug.i('saaa', 'App')
    debug.i(['saaa', 'dwadawd', 'wadwadas'], 'App')
    debug.i('saaa', 'App')
    const [user, loading, error] = useAuthState(firebaseOctopus.auth)
    //todo подумать как избавиться от хуков
    useEffect(() => {
        firebaseOctopus.setLoading(loading)
        firebaseOctopus.setUser(user)
    }, [loading, user])

    return (
        <Box
            display={'contents'}
            overflow={'hidden'}
            width={'100vh'}
            height={'100vh'}
        >
            <Container fixed>
                <BrowserRouter>
                    <CssBaseline />
                    <Loader />
                    <Navbar />
                    <AppRouter />
                </BrowserRouter>
            </Container>{' '}
        </Box>
    )
}

export default App
