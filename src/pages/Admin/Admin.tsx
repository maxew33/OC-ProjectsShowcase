import React, { FormEvent, useEffect, useState } from 'react'
import { dataConfigAtom, projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import { dataEntry } from '../../types/dataTypes'
import AddModale from '../../components/AddModale/AddModale'

const Admin: React.FC = () => {
    const [projects] = useAtom(projectsAtom)

    const [dataConfig] = useAtom(dataConfigAtom)

    const [projectsData, setProjectsData] = useState(projects)

    const [addModale, setAddModale] = useState(false)

    const handleInput = (e: FormEvent, entry: dataEntry, index: number) => {
        const target = e.target as HTMLFormElement
        console.log(target.value, entry, index)

        // Copiez l'ensemble de données actuel de projectsData
        const tmpProjectsData = [...projectsData]

        // Mettez à jour la propriété spécifique de tmpProjectsData
        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [entry.name]: target.value,
        }

        // Mettez à jour l'état projectsData avec la nouvelle valeur
        setProjectsData(tmpProjectsData)
    }

    useEffect(() => {
        console.log(projectsData)
    }, [projectsData])

    const displayModale = () => {
        console.log('clic')
        setAddModale(!addModale)
    }

    return (
        <>
        {addModale && <AddModale close={displayModale} />}
            <h1>Admin</h1>
            <button onClick={displayModale}>Nouveau Projet</button>
            {projectsData.map((project, index) => (
                <form key={'project' + index}>
                    {dataConfig.map((entry, idx) => (
                        <>
                            <span key={'project' + index + 'entry' + idx}>
                                {entry.type === 'string' ? (
                                    <>
                                        <label htmlFor={entry.name + index}>
                                            {entry.display}
                                        </label>
                                        <input
                                            type="text"
                                            placeholder={
                                                (project[
                                                    entry.name
                                                ] as string) || ''
                                            }
                                            name={entry.name + index}
                                            id={entry.name + index}
                                            onInput={(e) =>
                                                handleInput(
                                                    e,
                                                    entry,
                                                    index
                                                )
                                            }
                                        />
                                    </>
                                ) : (
                                    <span>
                                        {entry.display}
                                        {Array.isArray(project[entry.name]) && (
                                            (
                                                project[entry.name] as string[]
                                            ).map(
                                                (elt: string, idx: number) => (
                                                    <input
                                                        type="text"
                                                        placeholder={elt}
                                                        key={
                                                            'project' +
                                                            index +
                                                            'entry' +
                                                            idx
                                                        }
                                                        onInput={(e) =>
                                                            handleInput(
                                                                e,
                                                                entry,
                                                                index
                                                            )
                                                        }
                                                    />
                                                )
                                            )
                                        )}
                                    </span>
                                )}
                            </span>
                            <br />
                        </>
                    ))}
                </form>
            ))}
        </>
    )
}

export default Admin
