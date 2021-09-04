import React from 'react'
import { Box, Button, Container, Grid } from '@material-ui/core'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { firebaseOctopus } from '../../FirebaseOctopus'

const Login = (): JSX.Element => {
    const login = async () => {
        await firebaseOctopus.setLoading(true)
        const provider = new GoogleAuthProvider()
        const user = await signInWithPopup(firebaseOctopus.auth, provider).then(
            (result) => result.user
        )
        await firebaseOctopus.setLoading(false)
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
