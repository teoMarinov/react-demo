import React from 'react'
import { Link } from 'react-router-dom'

export const Home = ({ userData }) => {
    return (
        <>
            <div>Wellcome {userData}</div>
            <p>
                <Link to="/page1">To page</Link>
            </p>
        </>
    )
}
