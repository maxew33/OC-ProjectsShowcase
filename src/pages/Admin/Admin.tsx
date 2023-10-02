import React, { FormEvent, useEffect, useState } from 'react'
import { projectsAtom } from '../../main'
import { useAtom } from 'jotai'

interface DataEntry {
    name: string
    typeOfValue: string
}

export const Admin: React.FC = () => {
    const [projects] = useAtom(projectsAtom)

    const [projectsData, setProjectsData] = useState(projects)

    const [dataEntries, setDataEntries] = useState<DataEntry[]>()

    const handleInput = (e: FormEvent, key: string, index: number) => {
        const target = e.target as HTMLFormElement
        console.log(target.value, key, index)

        // Copiez l'ensemble de données actuel de projectsData
        const tmpProjectsData = [...projectsData]

        // Mettez à jour la propriété spécifique de tmpProjectsData
        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [key]: target.value,
        }

        // Mettez à jour l'état projectsData avec la nouvelle valeur
        setProjectsData(tmpProjectsData)
    }

    useEffect(() => {
        const keys = Object.keys(projectsData[0])
        const tmpEntries: DataEntry[] = []

        keys.forEach((key) => {
            tmpEntries.push({ name: key, typeOfValue: typeof projects[0][key] })
        })

        setDataEntries(tmpEntries)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(projectsData)
    }, [projectsData])

    return (
        <>
            <h1>Admin</h1>
            {projectsData.map((project, index) => (
                <form key={'project' + index}>
                    {dataEntries?.map((entrie, idx) => (
                        <span key={'project' + index + 'entrie' + idx}>
                            {entrie.typeOfValue === 'string' ? (
                                <>
                                    <label htmlFor={entrie.name + index}>
                                        {entrie.name}
                                    </label>
                                    <input
                                        type="text"
                                        placeholder={
                                            (project[entrie.name] as string) ||
                                            ''
                                        }
                                        name={entrie.name + index}
                                        id={entrie.name + index}
                                        onInput={(e) =>
                                            handleInput(e, entrie.name, index)
                                        }
                                    />
                                </>
                            ) : (
                                <span>
                                    {entrie.name}
                                    {Array.isArray(project[entrie.name]) ? (
                                        (project[entrie.name] as string[]).map(
                                            (elt: string, idx: number) => (
                                                <input
                                                    type="text"
                                                    placeholder={elt}
                                                    key={
                                                        'project' +
                                                        index +
                                                        'entrie' +
                                                        idx
                                                    }
                                                />
                                            )
                                        )
                                    ) : (
                                        <span>{project[entrie.name]}</span>
                                    )}
                                </span>
                            )}
                        </span>
                    ))}
                </form>
            ))}
        </>
    )
}

export default Admin
