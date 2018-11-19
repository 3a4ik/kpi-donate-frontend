import React from 'react'
import { Link } from 'react-router-dom'

import { INDEX } from "config/routes"

const Page404 = () => (
    <React.Fragment>
        <h1>Error 404</h1>
        <h2>Page not found</h2>
        <Link to={INDEX}>Back to home</Link>
    </React.Fragment>
);

export default Page404