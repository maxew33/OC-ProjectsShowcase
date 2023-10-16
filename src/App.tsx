import { Outlet } from 'react-router-dom'

import { useAtom } from 'jotai'
import { projectsAtom } from './main'

import { useEffect, useState } from 'react'

import CallData from './CallData/CallData'
import Header from './components/Header/Header'
import { dataFormat } from './types/dataTypes'
import { Footer } from './components/Footer/Footer'

const App = () => {
    const [, setProjects] = useAtom(projectsAtom)

    const [dataFetched, setDataFetched] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            if (!dataFetched) {
                const callData = new CallData()
                const projectsData = await callData.getProjectsData()

                if (projectsData) {
                    // Filtrer et formater les données pour s'assurer que `rank` est toujours défini comme un nombre
                    const formattedProjectsData = projectsData.map(
                        (project) => ({
                            ...project,
                            rank:
                                typeof project.rank === 'number'
                                    ? project.rank
                                    : 1,
                        })
                    ) as dataFormat[]

                    // Mettre à jour l'état `projects` avec les données formatées
                    setProjects(formattedProjectsData)
                }
            }
            setDataFetched(true)
        }
        fetchData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Header />
            {dataFetched && <Outlet />}
            <Footer />
        </>
    )
}

export default App
