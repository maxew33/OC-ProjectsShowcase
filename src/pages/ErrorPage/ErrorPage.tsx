import React from 'react'
import { Link } from 'react-router-dom'
import styles from './ErrorPage.module.css'

export const ErrorPage: React.FC = () => {
    return (
        <main className={styles.main}>
            <h2 className={styles.title}>404</h2>
            <p className={styles.text}>
                Désolé, nous n'avons pas trouvé cette page.
            </p>
            <Link to="/" className={styles.link}>
                Retour à la page d'accueil
            </Link>
        </main>
    )
}

export default ErrorPage
