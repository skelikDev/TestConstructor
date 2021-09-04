import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'

import { PROFILE_ROUTE, LOGIN_ROUTE } from './constant'
import { useAuthState } from 'react-firebase-hooks/auth'
import { firebaseOctopus } from '../FirebaseOctopus'

const AppRouter = (): JSX.Element => {
    const { auth } = firebaseOctopus
    const [user] = useAuthState(auth)
    return user ? (
        <Switch>
            {privateRoutes.map(({ path, Component }) => {
                return (
                    <Route key={path} exact path={path} component={Component} />
                )
            })}
            <Redirect to={PROFILE_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({ path, Component }) => {
                return (
                    <Route key={path} exact path={path} component={Component} />
                )
            })}
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
}

export default AppRouter
