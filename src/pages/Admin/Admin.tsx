import React, { FormEvent, Fragment, useEffect, useState } from 'react'
import { dataConfigAtom, projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import { dataEntry, moderatorFormat } from '../../types/dataTypes'
import AddModale from '../../components/AddModale/AddModale'
import { Link } from 'react-router-dom'
import updateProjects from '../../services/updateProjects'
import styles from './Admin.module.css'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, db, provider } from '../../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const Admin: React.FC = () => {
    const [projects, setProjects] = useAtom(projectsAtom)

    const [dataConfig] = useAtom(dataConfigAtom)

    const [projectsData, setProjectsData] = useState(projects)

    const [addModale, setAddModale] = useState(false)

    const [user, setUser] = useState('')

    // authentification

    const getModeratorsId = async () => {
        try {
            const moderatorsData = await getDocs(collection(db, 'moderators'))
            const moderators = moderatorsData.docs.map((moderator) => ({
                ...moderator.data(),
                id: moderator.id,
            })) as moderatorFormat[]
            return moderators
        } catch (err) {
            console.error(err)
        }
    }

    const logIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider)
            const user = result.user
            console.log(user, user.uid)

            const moderators = await getModeratorsId()

            moderators?.forEach((moderator) => {
                if (moderator.moderator.includes(user.uid)) {
                    setUser(user.displayName ?? '')
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    const logOut = async () => {
        setUser('')
        await signOut(auth)
    }

    // project data management

    const handleInput = (e: FormEvent, entry: dataEntry, index: number) => {
        const target = e.target as HTMLFormElement
        const value =
            entry.type === 'string' ? target.value : parseInt(target.value)

        const tmpProjectsData = [...projectsData]

        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [entry.name]: value,
        }

        setProjectsData(tmpProjectsData)
    }

    const handleArrayInput = (
        e: FormEvent,
        entry: dataEntry,
        index: number,
        entryIndex: number
    ) => {
        const target = e.target as HTMLFormElement

        const tmpProjectsData = [...projectsData]

        const tmpProjectsDataArray = [
            ...(tmpProjectsData[index][entry.name] as string[]),
        ]

        tmpProjectsDataArray[entryIndex] = target.value

        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [entry.name]: tmpProjectsDataArray,
        }

        setProjectsData(tmpProjectsData)
    }

    const deleteEntry = (
        e: FormEvent,
        entry: dataEntry,
        index: number,
        entryIndex: number
    ) => {
        e.preventDefault()

        const tmpProjectsData = [...projectsData]
        const tmpProjectsDataArray = [
            ...(tmpProjectsData[index][entry.name] as string[]),
        ]
        tmpProjectsDataArray.splice(entryIndex, 1)
        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [entry.name]: tmpProjectsDataArray,
        }

        setProjectsData(tmpProjectsData)
    }

    const newEntry = (e: FormEvent, entry: dataEntry, index: number) => {
        e.preventDefault()

        const tmpProjectsData = [...projectsData]

        const tmpProjectsDataArray = [
            ...(tmpProjectsData[index][entry.name] as string[]),
        ]

        tmpProjectsDataArray.push('')

        tmpProjectsData[index] = {
            ...tmpProjectsData[index],
            [entry.name]: tmpProjectsDataArray,
        }

        setProjectsData(tmpProjectsData)
    }
    
    useEffect(() => {
        setProjectsData(projects)
    }, [projects])

    // update the db
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

        updateProjects(projectsData[index], action)
    }

    const displayModale = () => {
        setAddModale(!addModale)
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
                {user && <button onClick={logOut}>sign out</button>}
            </section>

            {user ? (
                <section className={styles.projectsContainer}>
                    {projectsData.map((project, index) => (
                        <form key={'project' + index} className={styles.form}>
                            {dataConfig.map((entry, idx) => (
                                <Fragment
                                    key={'project' + index + 'entry' + idx}
                                >
                                    <span>
                                        {entry.type === 'string' ||
                                        entry.type === 'number' ? (
                                            <>
                                                <label
                                                    htmlFor={entry.name + index}
                                                    className={styles.label}
                                                >
                                                    {entry.display}
                                                </label>
                                                <input
                                                    type={
                                                        entry.type === 'string'
                                                            ? 'text'
                                                            : 'number'
                                                    }
                                                    value={project[entry.name]}
                                                    name={entry.name + index}
                                                    id={entry.name + index}
                                                    onInput={(e) =>
                                                        handleInput(
                                                            e,
                                                            entry,
                                                            index
                                                        )
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
                                                                    value={elt}
                                                                    onInput={(
                                                                        e
                                                                    ) =>
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
                                                                    name={
                                                                        entry.name +
                                                                        index +
                                                                        idx
                                                                    }
                                                                    id={
                                                                        entry.name +
                                                                        index +
                                                                        idx
                                                                    }
                                                                />
                                                                <button
                                                                    onClick={(
                                                                        e
                                                                    ) =>
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
            ) : (
                <button onClick={logIn}>sign in</button>
            )}
        </main>
    )
}

export default Admin
