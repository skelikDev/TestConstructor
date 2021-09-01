import React, { useContext } from 'react'
import { Box, Button, Container, Grid } from '@material-ui/core'
import { Context } from '../Firebase'
import firebase from 'firebase/compat'

const Login = (): JSX.Element => {
    const { auth, signInWithPopup, GoogleAuthProvider } = useContext(Context)
    const login = async () => {
        const provider = new GoogleAuthProvider()
        const user = await signInWithPopup(auth, provider).then(
            (result) => result.user
        )
        console.log(user)
    }
    return (
        <Container>
            <Grid
                container
                style={{ height: 'calc(100vh - 50px)' }}
                alignItems="center"
                justifyContent="center"
            >
                <Grid>
                    <Box>
                        <Button onClick={login} variant={'outlined'}>
                            войти с помощью Google
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Login
