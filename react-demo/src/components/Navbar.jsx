import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = ({ userData }) => {
    return (
        <div style={{
            width: '500px',
            height: '200px',
            backgroundColor: 'rgba(0, 0, 255)'
        }}>

            {
                userData ? (
                    <>
                        hello,{userData}
                    </>
                ) : (
                    <>
                        <Link>Log in</Link>
                        </>
                )
            }
        </div >
    )
}
