import {
    All_TESTS_ROUTE,
    COMPLETED_TESTS_ROUTE,
    LOGIN_ROUTE,
    MY_TESTS_ROUTE,
    PROFILE_ROUTE,
} from './constant'
import Login from '../components/Login/Login'
import { Profile } from '../components/Profile/Profile'
import { MyTests } from '../components/Profile/TestsBlock/TestsPage/MyTests'
import { AllTests } from '../components/Profile/TestsBlock/TestsPage/AllTests'
import { CompletedTests } from '../components/Profile/TestsBlock/TestsPage/CompletedTests'

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login,
    },
]
export const privateRoutes = [
    {
        path: PROFILE_ROUTE,
        Component: Profile,
    },
]
export const profileRoutes = [
    {
        path: MY_TESTS_ROUTE,
        Component: MyTests,
    },
    {
        path: All_TESTS_ROUTE,
        Component: AllTests,
    },
    {
        path: COMPLETED_TESTS_ROUTE,
        Component: CompletedTests,
    },
]
