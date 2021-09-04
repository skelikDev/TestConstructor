import { LOGIN_ROUTE, PROFILE_ROUTE } from './constant'
import Login from '../components/Login/Login'
import { Profile } from '../components/Profile/Profile'

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
        //    todo поменять компонент на целевой
    },
]
