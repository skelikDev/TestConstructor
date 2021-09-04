import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router-dom'
import { MY_TESTS_ROUTE } from '../../routes/constant'
import { MyTests } from './TestsBlock/TestsPage/MyTests'

export const ProfileRouter = () => {
    const match = useRouteMatch()
    return (
        <Switch>
            <Route
                path={`${match.path}${MY_TESTS_ROUTE}`}
                component={MyTests}
            />
        </Switch>
    )
}
