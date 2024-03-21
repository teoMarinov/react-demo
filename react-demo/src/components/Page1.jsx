import React from 'react'
import { Link } from 'react-router-dom'

export const Page1 = () => {
    const data = [
        {
            id: 1,
            name: 'Pesho',
            age: 11,
        },
        {
            id: 2,
            name: 'Gosho',
            age: 12,
        },
        {
            id: 3,
            name: 'Stamat',
            age: 13,
        }
    ]
    return (
        <>
        <Link to="/">Page1</Link>
        {
            data.map((item) => (
                <div key={item.id}>
                    {item.name} - {item.age} years old
                </div>
            ))
        }
        </>
    )
}
