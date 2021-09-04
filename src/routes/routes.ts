import { LOGIN_ROUTE, MY_TESTS_ROUTE, PROFILE_ROUTE } from './constant'
import Login from '../components/Login/Login'
import { Profile } from '../components/Profile/Profile'
import { TestsList } from '../components/TestsPage/TestsList'

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
    {
        path: MY_TESTS_ROUTE,
        Component: TestsList,
    },
]
