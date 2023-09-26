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
        console.log(idProject, projects)
        idProject ? setProject(idProject) : navigate('/error')
    }, [navigate, projectId, projects])

    return (
        <>
            <div>Project</div>

            <div>{project.name}</div>

            <Link to="/">back to home</Link>
        </>
    )
}

export default Project
