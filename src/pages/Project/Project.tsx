import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import { dataFormat } from '../../types/dataTypes'

import styles from './Project.module.css'

export const Project: React.FC = () => {
    const [projects] = useAtom(projectsAtom)

    const [project, setProject] = useState<dataFormat>({
        id: '',
        rank: 0,
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

    //get project id from url
    const params = useParams()
    const projectId = params.projectId

    const navigate = useNavigate()

    // find the right project
    useEffect(() => {
        const idProject = projects.find((elt) => elt.id === projectId)
        idProject ? setProject(idProject) : navigate('/error')
    }, [navigate, projectId, projects])

    return (
        <>
            <Link to="/" className={styles.back}>
                Retour à l'accueil
            </Link>
            <main className={styles.projectWrapper}>
                <section className={styles.presentation}>
                    <h3 className="title">{project.name}</h3>
                    <img src={project.closeup} alt={project.name} />
                </section>

                <section className={styles.description}>
                    <article>
                        <div className="section">Description</div>
                        <p className="content">{project.description}</p>
                    </article>
                    <article>
                        <div className="section">Technologies</div>
                        <div className="content">
                            {project.techno.map((elt, idx) => (
                                <p key={'techno' + idx} className={styles.list}>· {elt}</p>
                            ))}
                        </div>
                    </article>
                    <article>
                        <div className="section">Objectif</div>
                        <div className="content">
                            {project.purpose.map((elt, idx) => (
                                <p key={'purpose' + idx} className={styles.list}>· {elt}</p>
                            ))}
                        </div>
                    </article>
                    <article>
                        <div className="section">Compétences</div>
                        <div className="content">
                            {project.skills.map((elt, idx) => (
                                <p key={'skills' + idx} className={styles.list}>· {elt}</p>
                            ))}
                        </div>
                    </article>
                    <article>
                        <div className="section">Evaluation</div>
                        <div className="content">
                            {project.comment.map((elt, idx) => (
                                <p key={'comment' + idx} className={styles.list}>· {elt}</p>
                            ))}
                        </div>
                    </article>
                    <article>
                        <div className="section">Liens</div>
                        <div className="content">
                            {project.link && <a href={project.link}>site</a>}
                            <br />
                            {project.repo && <a href={project.repo}>github</a>}
                        </div>
                    </article>
                </section>
            </main>
        </>
    )
}

export default Project
