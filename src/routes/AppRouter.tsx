import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'

import { LOGIN_ROUTE, PROFILE_ROUTE } from './constant'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseOctopus } from '../FirebaseOctopus'

const AppRouter = (): JSX.Element => {
    const { auth } = firebaseOctopus
    const [user] = useAuthState(auth)
    const routes = () => {
        if (user) {
            return (
                <>
                    {privateRoutes.map(({ path, Component }) => {
                        return (
                            <Route
                                key={path}
                                path={path}
                                component={Component}
                            />
                        )
                    })}
                    <Redirect to={PROFILE_ROUTE} />
                </>
            )
        } else {
            return (
                <>
                    {publicRoutes.map(({ path, Component }) => {
                        return (
                            <Route
                                key={path}
                                exact
                                path={path}
                                component={Component}
                            />
                        )
                    })}
                    <Redirect to={LOGIN_ROUTE} />
                </>
            )
        }
    }

    return <Switch>{routes()}</Switch>
}

export default AppRouter
