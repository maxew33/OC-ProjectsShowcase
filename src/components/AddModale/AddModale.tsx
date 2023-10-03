import { useAtom } from 'jotai'
import React, { FormEvent, useEffect, useState } from 'react'
import { dataConfigAtom } from '../../main'
import { dataFormat, dataEntry } from '../../types/dataTypes'

const AddModale: React.FC<{ close: (e: React.FormEvent) => void }> = (
    props
) => {
    const [dataConfig] = useAtom(dataConfigAtom)

    const [newProject, setNewProject] = useState<dataFormat>({
        id: '',
        name: '',
        illustration: '',
        closeup: '',
        techno: [""],
        description: '',
        purpose: [""],
        skills: [""],
        link: '',
        repo: '',
        comment: [""],
    })

    const handleInputString = (e: FormEvent, entry: dataEntry) => {
        const target = e.target as HTMLFormElement
        console.log(target.value, entry.name)

        const tmpProjectsData = {...newProject, [entry.name]: target.value}

        // Mettez à jour l'état projectsData avec la nouvelle valeur
        setNewProject(tmpProjectsData)
    }

    useEffect(()=>{console.log(newProject)},[newProject])

    const handleInputArray = (e: FormEvent, entry: dataEntry, index: number) => {
        const target = e.target as HTMLFormElement
        console.log(target.value, entry.name, index)
        const tmpProjectsArray = [...newProject[entry.name]]
        tmpProjectsArray[index] = target.value
        const tmpProjectsData = {...newProject, [entry.name]: tmpProjectsArray}

        // Mettez à jour l'état projectsData avec la nouvelle valeur
        setNewProject(tmpProjectsData)
    }

    const handleNewValue = (e: FormEvent, entry: dataEntry) => {
        e.preventDefault()
        console.log('new value')
        const tmpProjectsArray = [...newProject[entry.name]]
        tmpProjectsArray.push('')
        const tmpProjectsData = {...newProject, [entry.name]: tmpProjectsArray}
        setNewProject(tmpProjectsData)
    }

    return (
        <div>
            <h2>nouveau projet : </h2>
            <form>
                {dataConfig.map((entry, idx) => (
                    <>
                        <span key={'entry-modale' + idx}>
                            {entry.type === 'string' ? (
                                <>
                                    <label htmlFor={'modale' + entry.name}>
                                        {entry.display}
                                    </label>
                                    <input
                                        type="text"
                                        name={'modale' + entry.name}
                                        id={'modale' + entry.name}
                                        onInput={(e) => handleInputString(e, entry)}
                                    />
                                </>
                            ) : (
                                <span>
                                    {entry.display}
                                    {Array.isArray(newProject[entry.name]) &&
                                        (newProject[entry.name] as string[]).map(
                                            (elt: string, idx: number) => (
                                                <input
                                                    type="text"
                                                    placeholder={elt}
                                                    key={
                                                        'newProject' +
                                                        'Entry' +
                                                        idx
                                                    }
                                                    onInput={(e) =>
                                                        handleInputArray(e, entry, idx)
                                                    }
                                                />
                                            )
                                        )}
                                        <button onClick={(e) => handleNewValue(e, entry)}>+</button>
                                </span>
                            )}
                        </span>
                        <br />
                    </>
                ))}
            </form>
            <button onClick={props.close}>OK</button>
        </div>
    )
}

export default AddModale
