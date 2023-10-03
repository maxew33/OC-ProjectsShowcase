import React from 'react'
import ReactDOM from 'react-dom/client'
import './style/style.css'

import { atom } from 'jotai'
import { dataFormat } from './types/dataTypes'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routesConfig from './routes/routesConfig'

export const projectsAtom = atom<dataFormat[]>([])
export const dataConfigAtom = atom([
    {
        name: 'name',
        display: 'nom',
        type: 'string',
    },
    {
        name: 'description',
        display: 'description',
        type: 'string',
    },
    {
        name: 'purpose',
        display: 'objectif',
        type: 'array',
    },
    {
        name: 'skills',
        display: 'compétences',
        type: 'array',
    },
    {
        name: 'techno',
        display: 'technologies',
        type: 'array',
    },
    {
        name: 'comment',
        display: 'évaluation',
        type: 'array',
    },
    {
        name: 'repo',
        display: 'repo du site',
        type: 'string',
    },
    {
        name: 'link',
        display: 'site déployé',
        type: 'string',
    },
    {
        name: 'illustration',
        display: 'illustration',
        type: 'string',
    },
    {
        name: 'closeup',
        display: 'close up',
        type: 'string',
    },
])

const router = createBrowserRouter(routesConfig)

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)
