import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export const Login = ({ setUserDataLogin }) => {


    const [name, setName] = useState('');

    const nav = useNavigate()

    const handleClick = () => {
        setUserDataLogin(name)
        nav('/')
    }

    return (
        <>
            <input type="text" onChange={(e) => setName(e.target.value)} />
            <button onClick={handleClick}>Login</button>
        </>
    )
}
