import React from 'react'
import { Box, Button } from '@material-ui/core'
import { Link, useRouteMatch } from 'react-router-dom'
import { MY_TESTS_ROUTE } from '../../../routes/constant'

// interface TestsBlockProp {
//   children: React.ReactNode
// }

export const TestsBlock = (): JSX.Element => {
    const match = useRouteMatch()
    return (
        <Box width={200}>
            <ul>
                <Link to={`${match.path}${MY_TESTS_ROUTE}`}>
                    <Button>Мои тесты</Button>
                </Link>
                <li>пройденные тесты</li>
                <li>все тесты</li>
            </ul>
        </Box>
    )
}
