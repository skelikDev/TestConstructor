import React from 'react'
import { TestsListView } from './TestsListView'
import { TTableRowData } from '../../../../types'
import { ActionCell } from './ActionCell'

// interface TestsListProp {
//   children: React.ReactNode
// }

export const MyTests = (): JSX.Element => {
    const headerCell = [
        'Название Теста',
        'Дата создания',
        'Правильных',
        'Действие',
    ]
    const rowsData: TTableRowData = [
        {
            name: 'CompletedTest1',
            data: ' 01.02.003',
            param: '5 из 10',
            action: 'Посмотреть',
        },
    ]
    return (
        <TestsListView
            Action={ActionCell}
            headerCell={headerCell}
            rowsData={rowsData}
        />
    )
}
