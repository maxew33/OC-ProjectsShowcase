import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import { dataFormat } from '../../types/dataTypes'

// import styles from './Project.module.css'

export const Project: React.FC = () => {
    const [projects] = useAtom(projectsAtom)

    const [project, setProject] = useState<dataFormat>({
        id: '',
        name: '',
        illus: '',
        closeup:'',
        techno: [''],
        description: '',
        purpose: [''],
        skills: [''],
        link: '',
        repo: '',
        comment: '',
    }
)
    //get project id from url
    const params = useParams()
    const projectId = params.projectId

    const navigate = useNavigate()

    // find the right project
    useEffect(() => {
        const idProject = projects.find((elt) => elt.id === projectId)
        console.log(idProject, projects, project.closeup)
        idProject ? setProject(idProject) : navigate('/error')
    }, [navigate, projectId, projects])

    return (
        <>
            <main>
                <div className="presentation">
                    <h3 className="title">{project.name}</h3>
                    <img src={project.closeup} alt={project.name} />
                </div>
                <div className="description">
                    <article>
                        <div className="section">Description</div>
                        <p className="content">{project.description}</p>
                    </article>
                    <article>
                        <div className="section">Objectif</div>
                        <p className="content">{project.purpose}</p>
                    </article>
                    <article>
                        <div className="section">Compétences</div>
                        <p className="content">{project.skills}</p>
                    </article>
                    <article>
                        <div className="section">Evaluation</div>
                        <p className="content">{project.comment}</p>
                    </article>
                    <article>
                        <div className="section">Liens</div>
                        <p className="content">{project.links}</p>
                    </article>
                </div>
            </main>

            <Link to="/">back to home</Link>
        </>
    )
}

export default Project
