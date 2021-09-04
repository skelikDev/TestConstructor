import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { PROFILE_ROUTE } from '../../routes/constant'
import { profileRoutes } from '../../routes/routes'

export const ProfileRouter = () => {
    const match = useRouteMatch()
    const routes = profileRoutes.map((el) => (
        <Route
            key={el.path}
            path={`${PROFILE_ROUTE}${el.path}`}
            component={el.Component}
        />
    ))
    return <Switch>{routes}</Switch>
}
