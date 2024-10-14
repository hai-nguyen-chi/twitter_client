import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'

const CommonLayout = lazy(() => import('~/layouts/CommonLayout'))

const Login = lazy(() => import('~/pages/Login'))
const Home = lazy(() => import('~/pages/Home'))
const Bookmark = lazy(() => import('~/pages/Bookmark'))
const Profile = lazy(() => import('~/pages/Profile'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />
  },
  {
    element: <CommonLayout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/bookmark',
        element: <Bookmark />
      },
      {
        path: '/profile',
        element: <Profile />
      }
    ]
  }
]

export default routes
