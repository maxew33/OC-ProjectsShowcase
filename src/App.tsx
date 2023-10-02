import { Outlet } from 'react-router-dom'

import { useAtom } from 'jotai'
import { projectsAtom } from './main'

import { useEffect, useState } from 'react'

import CallData from './CallData/CallData'
import Header from './components/Header/Header'

const App = () => {
    const [projects, setProjects] = useAtom(projectsAtom)

    const [dataFetched, setDataFetched] = useState(false)

    useEffect(() => {
        const fecthData = async () => {
            if (!dataFetched) {
                const callData = new CallData()

                const projectsData = await callData.getProjectsData()

                projectsData && setProjects([...projects, ...projectsData])
            }
            setDataFetched(true)
        }
        fecthData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            {dataFetched && <Outlet />}
        </>
    )
}

export default App