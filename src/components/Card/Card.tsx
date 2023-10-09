import React from 'react'
import { dataFormat } from '../../types/dataTypes'
import { Link } from 'react-router-dom'

import styles from './Card.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
    faCss3,
    faFigma,
    faGithub,
    faHtml5,
    faJs,
    faNode,
    faReact,
    faSass,
} from '@fortawesome/free-brands-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons/faLink'

const Card: React.FC<{ project: dataFormat }> = ({ project }) => {
    const { id, name, illustration, techno, link, repo } = project

    const renderTech = (tech: string) => {
        switch (tech) {
            case 'html':
                return <FontAwesomeIcon icon={faHtml5} />
            case 'css':
                return <FontAwesomeIcon icon={faCss3} />
            case 'scss':
                return <FontAwesomeIcon icon={faSass} />
            case 'js':
                return <FontAwesomeIcon icon={faJs} />
            case 'ts':
                return <FontAwesomeIcon icon={faJs} />
            case 'react':
                return <FontAwesomeIcon icon={faReact} />
            case 'figma':
                return <FontAwesomeIcon icon={faFigma} />
            case 'MERN':
                return <FontAwesomeIcon icon={faNode} />
        }
    }

    return (
        <article className={styles.article}>
            <Link to={`project/${id}`} className={styles.closeup} />
            <header>
                <Link to={`project/${id}`} className={styles.headerLink}>
                    <h3>{name}</h3>
                </Link>
                <span className="links">
                    {link && (
                        <a href={link}>
                            <FontAwesomeIcon icon={faLink} />
                        </a>
                    )}
                    {repo && (
                        <a href={repo}>
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    )}
                </span>
            </header>

            <img src={illustration} alt={name} className={styles.image} />

            <footer>
                {techno?.map((tech, idx) => (
                    <span key={`tech${idx}`}>
                        {renderTech(tech)} {tech}
                    </span>
                ))}
            </footer>
        </article>
    )
}

export default Card
