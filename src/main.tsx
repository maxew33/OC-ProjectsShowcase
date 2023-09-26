import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

import { atom } from 'jotai'
import { dataFormat } from './types/dataTypes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routesConfig from './routes/routesConfig'

export const projectsAtom = atom<dataFormat[]>([])

const router = createBrowserRouter(routesConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
