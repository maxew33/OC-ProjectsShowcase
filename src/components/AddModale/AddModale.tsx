import { useAtom } from 'jotai'
import React, { FormEvent, Fragment, useState } from 'react'
import { dataConfigAtom, projectsAtom } from '../../main'
import { dataFormat, dataEntry } from '../../types/dataTypes'
import { v4 as uuidv4 } from 'uuid'
import updateProjects from '../../services/updateProjects'

const AddModale: React.FC<{ close: () => void }> = (
    props
) => {
    const [dataConfig] = useAtom(dataConfigAtom)
    const [projects, setProjects] = useAtom(projectsAtom)

    const [newProject, setNewProject] = useState<dataFormat>({
        id: '',
        name: '',
        illustration: '',
        closeup: '',
        techno: [''],
        description: '',
        purpose: [''],
        skills: [''],
        link: '',
        repo: '',
        comment: [''],
    })

    const handleInputString = (e: FormEvent, entry: dataEntry) => {
        const target = e.target as HTMLFormElement
        const tmpProjectsData = { ...newProject, [entry.name]: target.value }

        setNewProject(tmpProjectsData)
    }

    const handleInputArray = (
        e: FormEvent,
        entry: dataEntry,
        index: number
    ) => {
        const target = e.target as HTMLFormElement
        const tmpProjectsArray = [...newProject[entry.name]]
        tmpProjectsArray[index] = target.value
        const tmpProjectsData = {
            ...newProject,
            [entry.name]: tmpProjectsArray,
        }

        setNewProject(tmpProjectsData)
    }

    const handleNewValue = (e: FormEvent, entry: dataEntry) => {
        e.preventDefault()
        const tmpProjectsArray = [...newProject[entry.name]]
        tmpProjectsArray.push('')
        const tmpProjectsData = {
            ...newProject,
            [entry.name]: tmpProjectsArray,
        }
        setNewProject(tmpProjectsData)
    }

    const handleDeleteValue = (
        e: FormEvent,
        entry: dataEntry,
        index: number
    ) => {
        e.preventDefault()
        const tmpProjectsArray = [...newProject[entry.name]]
        tmpProjectsArray.splice(index, 1)
        const tmpProjectsData = {
            ...newProject,
            [entry.name]: tmpProjectsArray,
        }
        setNewProject(tmpProjectsData)
    }

    const addProject = () => {
        setProjects([...projects, { ...newProject, id: uuidv4() }])
        updateProjects(newProject, 'create')
        props.close()
    }

    return (
        <div>
            <h2>nouveau projet : </h2>
            <form>
                {dataConfig.map((entry, idx) => (
                    <Fragment key={'entry-modale' + idx}>
                        <span>
                            {entry.type === 'string' ? (
                                <>
                                    <label htmlFor={'modale' + entry.name}>
                                        {entry.display}
                                    </label>
                                    <input
                                        type="text"
                                        name={'modale' + entry.name}
                                        id={'modale' + entry.name}
                                        value={newProject[entry.name]}
                                        onInput={(e) =>
                                            handleInputString(e, entry)
                                        }
                                    />
                                </>
                            ) : (
                                <span>
                                    {entry.display}
                                    {Array.isArray(newProject[entry.name]) &&
                                        (
                                            newProject[entry.name] as string[]
                                        ).map((elt: string, idx: number) => (
                                            <Fragment
                                                key={
                                                    'newProject' + 'Entry' + idx
                                                }
                                            >
                                                <input
                                                    type="text"
                                                    onInput={(e) =>
                                                        handleInputArray(
                                                            e,
                                                            entry,
                                                            idx
                                                        )
                                                    }
                                                    value={elt}
                                                />
                                                <button
                                                    onClick={(e) =>
                                                        handleDeleteValue(
                                                            e,
                                                            entry,
                                                            idx
                                                        )
                                                    }
                                                >
                                                    X
                                                </button>
                                                <br />
                                            </Fragment>
                                        ))}
                                    <button
                                        onClick={(e) =>
                                            handleNewValue(e, entry)
                                        }
                                    >
                                        +
                                    </button>
                                </span>
                            )}
                        </span>
                        <br />
                    </Fragment>
                ))}
            </form>
            <button onClick={props.close}>Cancel</button>

            <button onClick={addProject}>OK</button>
        </div>
    )
}

export default AddModale