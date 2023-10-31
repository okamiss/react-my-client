import React, { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import Layout from '@/layout'
import Home from '@/pages/home'
import Login from '@/pages/login'


const Chat = lazy(() => import('@/pages/chat'))
const MessageBoard = lazy(() => import('@/pages/messageBoard'))
const Picture = lazy(() => import('@/pages/picture'))
const Guide = lazy(() => import('@/pages/guide'))
const ReactSpring = lazy(() => import('@/pages/reactSpring'))
const ReactPopper = lazy(() => import('@/pages/reactPopper'))
const ReactIcons = lazy(() => import('@/pages/reactIcons'))





const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<h1>Loading...</h1>}>{comp}</React.Suspense>
)

const routes = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/chat',
        element: withLoadingComponent(<Chat />)
      },
      {
        path: '/messageBoard',
        element: withLoadingComponent(<MessageBoard />)
      },
      {
        path: '/picture',
        element: withLoadingComponent(<Picture />)
      },
      {
        path: '/guide',
        element: withLoadingComponent(<Guide />)
      }
      ,
      {
        path: '/reactSpring',
        element: withLoadingComponent(<ReactSpring />)
      },
      {
        path: '/reactPopper',
        element: withLoadingComponent(<ReactPopper />)
      },
      {
        path: '/reactIcons',
        element: withLoadingComponent(<ReactIcons />)
      }
      
      

      
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to="/home" />
  }
]

export default routes
