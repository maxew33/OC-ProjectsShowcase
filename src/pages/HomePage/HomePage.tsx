import React, { useEffect, useState } from 'react'
import { projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import Card from '../../components/Card/Card'

import styles from './HomePage.module.css'

const HomePage: React.FC = () => {

    interface FiltersType {
        [key: string]: boolean
    }

    const [projects] = useAtom(projectsAtom)

    const [filters, setFilters] = useState<string[]>([])

    const [filtersChecked, setFiltersChecked] = useState<FiltersType>({})

    const [allChecked, setAllChecked] = useState(true)

    const [allTech, setAllTech] = useState<string[]>([])

    useEffect(() => {
        projects.forEach((project) => {
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
    }, [allTech, projects])

    const changeFilters = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiltersChecked((prevFiltersChecked) => ({
            ...prevFiltersChecked,
            [e.target.id]: !prevFiltersChecked[e.target.id],
        }))
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

    useEffect(() => {
        const tmpFilters = []

        let all = true

        for (const key in filtersChecked) {
            filtersChecked[key] === true ? tmpFilters.push(key) : (all = false)
        }

        setAllChecked(all)

        setFilters(tmpFilters)
    }, [filtersChecked])

    return (
        <>
            <section className={styles.filters}>
                Filtres
                <span className={styles.filtersWrapper}>
                    <span>
                        <input
                            type="checkbox"
                            name="all"
                            id="all"
                            onChange={changeAllFilters}
                        />
                        <label
                            htmlFor="all"
                            className={allChecked ? '' : styles.unchecked}
                        >
                            Tous
                        </label>
                    </span>
                    {allTech.map((tech, idx) => (
                        tech &&
                        <span key={`tech${idx}`}>
                            <input
                                type="checkbox"
                                name={tech}
                                id={tech}
                                onChange={changeFilters}
                            />
                            <label
                                htmlFor={tech}
                                className={
                                    filtersChecked[tech] ? '' : styles.unchecked
                                }
                            >
                                {tech}
                            </label>
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
