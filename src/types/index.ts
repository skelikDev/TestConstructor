export interface IUser {
    id: number
    email: string
    password: string
}

export interface ITest {
    id: number
    title: string
    authorId: number
    creationData: string
}

export interface IQuestion {
    id: number
    description: string
    type: TTypeQuestion
    order: number
    TestID: number
}

export interface IAnswer {
    id: number
    value: string
    correct: boolean
    questionId: number
}

export interface ICompletedTest {
    id: number
    userId: number
    testId: number
    right: number
    wrong: number
}

export interface IUsersAnswers {
    id: number
    userId: number
    answerId: number
    value: string
}

type TTypeQuestion = 'radio' | 'check' | 'string'
//TODO Определить более точный тип для TTableRowData.action
export type TTableRowData = [
    { name: string; data: string; param: string; action: any }
]
