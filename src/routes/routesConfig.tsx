import HomePage from '../pages/HomePage/HomePage'
import Admin from '../pages/Admin/Admin'
import Project from '../pages/Project/Project'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const routesConfig = [
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/admin',
        element: <Admin />,
    },
    {
      path: "project/:projectId",
      element: <Project />,
    },
]

export default routesConfig
