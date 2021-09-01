import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import { LOGIN_ROUTE } from '../routes/constant'
import { Context } from '../Firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Navbar = (): JSX.Element => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return (
        <AppBar>
            <Toolbar variant="dense">
                <Grid container justifyContent={'flex-end'}>
                    {user ? (
                        <Button
                            onClick={() => {
                                auth.signOut()
                            }}
                        >
                            Logout
                        </Button>
                    ) : (
                        <NavLink to={LOGIN_ROUTE}>
                            <Button>Login</Button>
                        </NavLink>
                    )}
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
