import React from 'react'
import styles from './Footer.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <section className="footerCopyright">
                Maxime Malfilâtre 2023
            </section>
            <section className={styles.footerLinks}>
                <a href="https://www.linkedin.com/in/maxime-malfilatre/">
                    <FontAwesomeIcon icon={faLinkedin} /> Linkedin
                </a>
                -
                <a href="https://github.com/maxew33">
                    <FontAwesomeIcon icon={faGithub} /> Github
                </a>
                -
                <a
                    href="https://maxime-malfilatre.com"
                    rel="noopener"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
                    Portfolio
                </a>
            </section>
        </footer>
    )
}
