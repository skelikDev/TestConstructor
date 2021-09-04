import { makeAutoObservable } from 'mobx'
import {
    IAnswer,
    ICompletedTest,
    IQuestion,
    ITest,
    IUsersAnswers,
} from '../types'

export class User {
    constructor() {
        makeAutoObservable(this)
    }
}

export class Test implements ITest {
    id
    title
    authorId
    creationData

    constructor({ id, title, authorId, creationData }: ITest) {
        this.id = id
        this.title = title
        this.authorId = authorId
        this.creationData = creationData
    }
}

export class Question implements IQuestion {
    id
    description
    type
    order
    TestID

    constructor({ id, description, type, order, TestID }: IQuestion) {
        this.id = id
        this.description = description
        this.type = type
        this.order = order
        this.TestID = TestID
    }
}

export class Answer implements IAnswer {
    id
    value
    correct
    questionId

    constructor({ id, value, correct, questionId }: IAnswer) {
        this.id = id
        this.value = value
        this.correct = correct
        this.questionId = questionId
    }
}

export class CompletedTest implements ICompletedTest {
    id
    userId
    testId
    right
    wrong

    constructor({ id, userId, testId, right, wrong }: ICompletedTest) {
        this.id = id
        this.userId = userId
        this.testId = testId
        this.right = right
        this.wrong = wrong
    }
}

export class UsersAnswers {
    id
    userId
    answerId
    value

    constructor({ id, userId, answerId, value }: IUsersAnswers) {
        this.id = id
        this.userId = userId
        this.answerId = answerId
        this.value = value
    }
}
