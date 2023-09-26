import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage: React.FC = () => {
    return (
        <>
            <div>404 - not found</div>
            {/* <a href="/">home</a> */}
            <Link to="/">back to home</Link>
        </>
    )
}

export default ErrorPage
