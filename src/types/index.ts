export interface IUser {
    id: string | number
    email: string
    password: string
    photoUrl: string
    name: string
}

export interface ITest {
    id: string | number
    title: string
    authorId: string | number
    creationData: string
}

export interface IQuestion {
    id: string | number
    description: string
    type: TTypeQuestion
    order: number
    TestID: string | number
}

export interface IAnswer {
    id: string | number
    value: string
    correct: boolean
    questionId: number
}

export interface ICompletedTest {
    id: string | number
    userId: string | number
    testId: string | number
    right: number
    wrong: number
}

export interface IUsersAnswers {
    id: string | number
    userId: string | number
    answerId: string | number
    value: string
}

type TTypeQuestion = 'radio' | 'check' | 'string'
//TODO Определить более точный тип для TTableRowData.action
export type TTableRowData = [
    { name: string; data: string; param: string; action: any }
]
