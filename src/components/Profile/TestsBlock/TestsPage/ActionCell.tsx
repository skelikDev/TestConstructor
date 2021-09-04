import { Box, Button } from '@material-ui/core'
import React from 'react'

export interface ActionCellProp {
    children?: string
}
export const ActionCell = ({ children }: ActionCellProp): JSX.Element => {
    return (
        <Box>
            <Button>{children}</Button>
        </Box>
    )
}
