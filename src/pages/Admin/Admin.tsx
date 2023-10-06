import React, { FormEvent, Fragment, useEffect, useState } from 'react'
import { dataConfigAtom, projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import { dataEntry } from '../../types/dataTypes'
import AddModale from '../../components/AddModale/AddModale'
import { Link } from 'react-router-dom'
import updateProjects from '../../services/updateProjects'
import styles from './Admin.module.css'

const Admin: React.FC = () => {
    const [projects, setProjects] = useAtom(projectsAtom)

    const [dataConfig] = useAtom(dataConfigAtom)

    const [projectsData, setProjectsData] = useState(projects)

    const [addModale, setAddModale] = useState(false)

    const handleInput = (e: FormEvent, entry: dataEntry, index: number) => {
        const target = e.target as HTMLFormElement

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

    const handleArrayInput = (
        e: FormEvent,
        entry: dataEntry,
        index: number,
        entryIndex: number
    ) => {
        const target = e.target as HTMLFormElement

        // Copiez l'ensemble de données actuel de projectsData
        const tmpProjectsData = [...projectsData]

        const tmpProjectsDataArray = [...tmpProjectsData[index][entry.name]]

        tmpProjectsDataArray[entryIndex] = target.value

        // Mettez à jour la propriété spécifique de tmpProjectsData
        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [entry.name]: tmpProjectsDataArray,
        }

        // Mettez à jour l'état projectsData avec la nouvelle valeur
        setProjectsData(tmpProjectsData)
    }

    useEffect(() => {
        console.log(projectsData)
    }, [projectsData])

    useEffect(() => {
        setProjectsData(projects)
    }, [projects])

    const displayModale = () => {
        setAddModale(!addModale)
    }

    const handleChangeProject = (
        e: FormEvent,
        index: number,
        action: string
    ) => {
        e.preventDefault()

        const atomIndex = projects.findIndex(
            (project) => project.id === projectsData[index].id
        )

        const tmpProjects = [...projects]

        action === 'update'
            ? (tmpProjects[atomIndex] = projectsData[index])
            : tmpProjects.splice(index, 1)

        setProjects(tmpProjects)

        console.log(action === 'update' ? 'updated' : 'deleted')

        updateProjects(projectsData[index], action)
    }

    const deleteEntry = (
        e: FormEvent,
        entry: dataEntry,
        index: number,
        entryIndex: number
    ) => {
        e.preventDefault()
        console.log('delete')

        // Copiez l'ensemble de données actuel de projectsData
        const tmpProjectsData = [...projectsData]
        const tmpProjectsDataArray = [...tmpProjectsData[index][entry.name]]
        tmpProjectsDataArray.splice(entryIndex, 1)
        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [entry.name]: tmpProjectsDataArray,
        }

        // Mettez à jour l'état projectsData avec la nouvelle valeur
        setProjectsData(tmpProjectsData)
    }

    const newEntry = (e: FormEvent, entry: dataEntry, index: number) => {
        e.preventDefault()
        console.log('add')

        // Copiez l'ensemble de données actuel de projectsData
        const tmpProjectsData = [...projectsData]

        const tmpProjectsDataArray = [...tmpProjectsData[index][entry.name]]

        tmpProjectsDataArray.push('')

        // Mettez à jour la propriété spécifique de tmpProjectsData
        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [entry.name]: tmpProjectsDataArray,
        }

        // Mettez à jour l'état projectsData avec la nouvelle valeur
        setProjectsData(tmpProjectsData)
    }

    return (
        <main>
            {addModale && <AddModale close={displayModale} />}
            <h1 className={styles.title}>Admin</h1>
            <section className={styles.links}>
                <button onClick={displayModale} className={styles.newProject}>
                    Nouveau Projet
                </button>
                <Link to="/" className={styles.backLink}>
                    back to home
                </Link>
            </section>

            <section className={styles.projectsContainer}>
                {projectsData.map((project, index) => (
                    <form key={'project' + index} className={styles.form}>
                        {dataConfig.map((entry, idx) => (
                            <Fragment key={'project' + index + 'entry' + idx}>
                                <span>
                                    {entry.type === 'string' ? (
                                        <>
                                            <label
                                                htmlFor={entry.name + index}
                                                className={styles.label}
                                            >
                                                {entry.display}
                                            </label>
                                            <input
                                                type="text"
                                                value={
                                                    (project[
                                                        entry.name
                                                    ] as string) || ''
                                                }
                                                name={entry.name + index}
                                                id={entry.name + index}
                                                onInput={(e) =>
                                                    handleInput(e, entry, index)
                                                }
                                                className={styles.input}
                                            />
                                        </>
                                    ) : (
                                        <span>
                                            <span className={styles.label}>
                                                {entry.display}
                                                <button
                                                    onClick={(e) =>
                                                        newEntry(
                                                            e,
                                                            entry,
                                                            index
                                                        )
                                                    }
                                                >
                                                    +
                                                </button>
                                            </span>
                                            {Array.isArray(
                                                project[entry.name]
                                            ) &&
                                                (
                                                    project[
                                                        entry.name
                                                    ] as string[]
                                                ).map(
                                                    (
                                                        elt: string,
                                                        idx: number
                                                    ) => (
                                                        <Fragment
                                                            key={
                                                                'project' +
                                                                index +
                                                                'entry' +
                                                                idx
                                                            }
                                                        >
                                                            <input
                                                                type="text"
                                                                value={
                                                                    elt
                                                                }
                                                                onInput={(e) =>
                                                                    handleArrayInput(
                                                                        e,
                                                                        entry,
                                                                        index,
                                                                        idx
                                                                    )
                                                                }
                                                                className={
                                                                    styles.input
                                                                }
                                                            />
                                                            <button
                                                                onClick={(e) =>
                                                                    deleteEntry(
                                                                        e,
                                                                        entry,
                                                                        index,
                                                                        idx
                                                                    )
                                                                }
                                                            >
                                                                x
                                                            </button>
                                                            <br />
                                                        </Fragment>
                                                    )
                                                )}
                                        </span>
                                    )}
                                </span>
                            </Fragment>
                        ))}
                        <div className={styles.buttonContainer}>
                            <button
                                onClick={(e) =>
                                    handleChangeProject(e, index, 'update')
                                }
                                className={styles.buttonUpdate}
                            >
                                update
                            </button>
                            <button
                                onClick={(e) =>
                                    handleChangeProject(e, index, 'delete')
                                }
                                className={styles.buttonDelete}
                            >
                                delete
                            </button>
                        </div>
                    </form>
                ))}
            </section>
        </main>
    )
}

export default Admin
