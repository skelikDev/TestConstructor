import React from 'react'
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core'
import { TTableRowData } from '../../../../types'
import { ActionCellProp } from './MyTests'

interface TestsListViewProp {
    headerCell: string[]
    rowsData: TTableRowData
    Action: ({ children }: ActionCellProp) => JSX.Element
}

export const TestsListView = ({
    rowsData,
    headerCell,
    Action,
}: TestsListViewProp): JSX.Element => {
    function createData(
        name: string,
        data: string,
        param: string,
        action: any
    ) {
        return { name, data, param, action }
    }

    const rows = rowsData.map((el) =>
        createData(el.name, el.data, el.param, el.action)
    )

    return (
        <TableContainer>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        {headerCell.map((el, index) => (
                            <TableCell
                                key={el}
                                align={index === 0 ? 'left' : 'right'}
                            >
                                {el}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell scope="row">{row.name}</TableCell>
                            <TableCell align="right">{row.data}</TableCell>
                            <TableCell align="right">{row.param}</TableCell>
                            <TableCell align="right">
                                <Box
                                    display={'flex'}
                                    justifyContent={'flex-end'}
                                >
                                    <Action>{row.action}</Action>
                                </Box>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
