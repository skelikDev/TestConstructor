import React from 'react'
import { Box, Button } from '@material-ui/core'
import { Link, useRouteMatch } from 'react-router-dom'
import {
    All_TESTS_ROUTE,
    COMPLETED_TESTS_ROUTE,
    MY_TESTS_ROUTE,
} from '../../../routes/constant'

// interface TestsBlockProp {
//   children: React.ReactNode
// }

export const TestsBlock = (): JSX.Element => {
    const match = useRouteMatch()
    return (
        <Box width={200}>
            <Box>
                <Link to={`${match.path}${MY_TESTS_ROUTE}`}>
                    <Button>Мои тесты</Button>
                </Link>
                <Link to={`${match.path}${All_TESTS_ROUTE}`}>
                    <Button>Все тесты</Button>
                </Link>
                <Link to={`${match.path}${COMPLETED_TESTS_ROUTE}`}>
                    <Button>Завершенные тесты</Button>
                </Link>
            </Box>
        </Box>
    )
}
