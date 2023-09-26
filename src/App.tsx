import { Outlet } from 'react-router-dom'

import { useAtom } from 'jotai'
import { projectsAtom } from './main'

import { useEffect, useState } from 'react'

import CallData from './CallData/CallData'

const App = () => {
    const [projects, setProjects] = useAtom(projectsAtom)

    const [dataFetched, setDataFetched] = useState(false)

    useEffect(() => {
        const fecthData = async () => {
            if (!dataFetched) {
                const url = import.meta.env.DB_URI ?? ''
                const callData = new CallData(url)

                const projectsData = await callData.getProjectsData()

                projectsData && setProjects([...projects, ...projectsData])
            }
            setDataFetched(true)
            console.log('data fetched')
        }
        fecthData()

        console.log(123, projects)
    }, [])

    return <>{dataFetched && <Outlet />}</>
}

export default App
