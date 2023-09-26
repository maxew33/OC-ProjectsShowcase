import React from 'react'
import { projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import Card from '../../components/Card/Card'

const HomePage: React.FC = () => {
    const [projects] = useAtom(projectsAtom)

    return (
        <>
            <section>Filtres</section>
            <section className="projects">
                {projects.map((project, idx) => (
                    <Card project={project} key={'project' + idx} />
                ))}
            </section>
        </>
    )
}

export default HomePage
