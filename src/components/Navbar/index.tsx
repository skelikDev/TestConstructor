import React from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { LOGIN_ROUTE } from '../../routes/constant'
import { useAuthState } from 'react-firebase-hooks/auth'
import { NavbarView } from './NavbarView'
import { firebaseOctopus } from '../../FirebaseOctopus'

const Navbar = (): JSX.Element => {
    const { auth } = firebaseOctopus
    const [user] = useAuthState(auth)
    const login = user ? (
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
    )
    return <NavbarView login={login} />
}

export default Navbar
