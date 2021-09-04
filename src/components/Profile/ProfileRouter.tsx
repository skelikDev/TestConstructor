import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MY_TESTS_ROUTE } from '../../routes/constant'
import { TestsList } from '../TestsPage/TestsList'

export const ProfileRouter = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route
                path={`${match.path}${MY_TESTS_ROUTE}`}
                component={TestsList}
            />
        </Switch>
    )
}
