import HomePage from '../pages/HomePage/HomePage'
import Admin from '../pages/Admin/Admin'
import Project from '../pages/Project/Project'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import App from '../App'

const routesConfig = [
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '', element: <HomePage /> },
            {
                path: '/admin',
                element: <Admin />,
            },
            {
                path: '/project/:projectId',
                element: <Project />,
            },
            {
                path: '/error',
                element: <ErrorPage />,
            },
        ],
    },
]

export default routesConfig
