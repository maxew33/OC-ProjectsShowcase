import React, { useEffect, useState } from 'react'
import { projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import Card from '../../components/Card/Card'

import styles from './HomePage.module.css'

const HomePage: React.FC = () => {
    const [projects] = useAtom(projectsAtom)

    const [filters, setFilters] = useState<string[]>([])

    const [filtersChecked, setFiltersChecked] = useState<FiltersType>({})

    const [allChecked, setAllChecked] = useState(true)

    interface FiltersType {
        [key: string]: boolean;
    }

    // const allTech : string[] = []

    const [allTech, setAllTech] = useState<string[]>([])

    useEffect(() => {
        projects.forEach((project) => {
            console.log(project.techno)
            project.techno.forEach((tech) => {
                setAllTech((prevTech) => {
                    if (!prevTech.includes(tech)) {
                        return [...prevTech, tech]
                    }
                    return prevTech
                })
            })
        })

        allTech.forEach((tech) => {
            setFiltersChecked((prevFiltersChecked) => ({
                ...prevFiltersChecked,
                [tech]: true,
            }))
        })

        setFilters(allTech)
    }, [])

    const changeFilters = (tech: React.ChangeEvent<HTMLInputElement>) => {
        console.log(tech.target.id)
        setFiltersChecked((prevFiltersChecked) => ({
             ...prevFiltersChecked , [tech.target.id]: !prevFiltersChecked[tech.target.id] }))
    }

    const changeAllFilters = () => {
        if (!allChecked) {
            setAllChecked(!allChecked)
            setFiltersChecked((prevFiltersChecked) => {
                const updatedFiltersChecked = { ...prevFiltersChecked }
                for (const key in updatedFiltersChecked) {
                    updatedFiltersChecked[key] = true
                }
                return updatedFiltersChecked
            })
        }
    }
    
    useEffect(()=>{
        const tmpFilters = []

        let all = true

        for (const key in filtersChecked) {
            filtersChecked[key] === true ? tmpFilters.push(key) : all = false
        }

        setAllChecked(all)

        setFilters(tmpFilters)
    },[filtersChecked])

    return (
        <>
            <section className={styles.filters}>
                Filtres
                <span>
                    <input
                        type="checkbox"
                        name="all"
                        id="all"
                        checked={allChecked}
                        onChange={changeAllFilters}
                    />
                    <label htmlFor="all">Tous</label>
                    {allTech.map((tech, idx) => (
                        <span key={`tech${idx}`}>
                            <input
                                type="checkbox"
                                name={tech}
                                id={tech}
                                checked={filtersChecked[tech]}
                                onChange={(tech) => changeFilters(tech)}
                            />
                            <label htmlFor={tech}>{tech}</label>
                        </span>
                    ))}
                </span>
            </section>
            <section className={styles.projects}>
                {projects.map(
                    (project, idx) =>
                        filters.some((item) =>
                            project.techno.includes(item)
                        ) && <Card project={project} key={'project' + idx} />
                )}
            </section>
        </>
    )
}

export default HomePage
