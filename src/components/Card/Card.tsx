import React, { useState } from 'react'
import { dataFormat } from '../../types/dataTypes'
import { Navigate } from 'react-router-dom'

import styles from './Card.module.css'

const Card: React.FC<{ project: dataFormat }> = ({ project }) => {
    const {
        id,
        name,
        illus,
        techno,
        description,
        purpose,
        skills,
        link,
        repo,
        comment,
    } = project

    const [navigate, setNavigate] = useState(false)
    return (
        <article className={styles.article} onClick={() => setNavigate(true)}>
            {navigate && <Navigate to={`project/${id}`} replace={true} />}
            <h3>nom : {name}</h3>
            <img src={illus} alt={name} className={styles.image}/>
            {techno?.map((tech, idx) => (
                <span key={`tech${idx}`}>{tech}</span>
            ))}
            <div>{description}</div>
            {purpose?.map((goal, idx) => (
                <div key={`purpose${idx}`}>{goal}</div>
            ))}
            {skills?.map((skill, idx) => (
                <div key={`skills${idx}`}>{skill}</div>
            ))}
            <a href={link}>lien vers le site</a>
            <br />
            <a href={repo}>lien vers le repo</a>
            <div>{comment}</div>
        </article>
    )
}

export default Card
