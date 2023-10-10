import HomePage from '../pages/HomePage/HomePage'
import Admin from '../pages/Admin/Admin'
import Project from '../pages/Project/Project'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import App from '../App'

const routesConfig = [
    {
        path: '/OC-ProjectsShowcase/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { path: '/OC-ProjectsShowcase/', element: <HomePage /> },
            {
                path: '/OC-ProjectsShowcase/admin',
                element: <Admin />,
            },
            {
                path: '/OC-ProjectsShowcase/project/:projectId',
                element: <Project />,
            },
            {
                path: '/OC-ProjectsShowcase/error',
                element: <ErrorPage />,
            },
        ],
    },
]

export default routesConfig
