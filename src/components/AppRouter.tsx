import React, { useContext } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes/routes'

import { CHAT_ROUTE, LOGIN_ROUTE } from '../routes/constant'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Context } from '../Firebase'

const AppRouter = (): JSX.Element => {
    const { auth } = useContext(Context)
    const [user] = useAuthState(auth)
    return user ? (
        <Switch>
            {privateRoutes.map(({ path, Component }) => {
                return (
                    <Route key={path} exact path={path} component={Component} />
                )
            })}
            <Redirect to={CHAT_ROUTE} />
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
