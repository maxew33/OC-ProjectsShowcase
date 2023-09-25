import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routesConfig from './routes/routesConfig'

const App = () => {
    const router = createBrowserRouter(routesConfig)
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
