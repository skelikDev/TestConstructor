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
        'Количество участников',
        'Действие',
    ]
    const rowsData: TTableRowData = [
        {
            name: 'myTest1',
            data: ' 01.02.003',
            param: '5',
            action: 'Изменить',
        },
    ]

    return (
        <TestsListView
            headerCell={headerCell}
            rowsData={rowsData}
            Action={ActionCell}
        />
    )
}
