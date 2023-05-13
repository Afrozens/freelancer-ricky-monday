import { createBrowserRouter } from 'react-router-dom'
import { Header } from '../components'
import { Error404, HistoryPage, HomePage, LoginPage } from '../pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Header />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/history',
        element: <HistoryPage />,
      },
    ],
  },
])

export default router
