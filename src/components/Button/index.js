import React from 'react'

export const Button = ({ name, onClick }) => {
    return (
        <div>
            <button onClick={onClick}>{name}</button>
        </div>
    )
}
