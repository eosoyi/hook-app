import React from 'react'
interface Props {
    increment: () => void,
}

export const ShowIncrement: React.FC<Props> = ({ increment }) => {
    console.log('volviendo')
    return (
        <button className='btn btn-primary' onClick={increment}>
            Increment
        </button>
    )
}
