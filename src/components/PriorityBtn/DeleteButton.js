import React from 'react'

const DeleteButton = ({ tasks, onDelete }) => {
    return (
        <button className="bg-red-700 text-white font-bold uppercase text-xs px-2 rounded-full my-1.5 mr-1 m-1 font-mono" type="button" onClick={() => onDelete(tasks.id)}>
                X
        </button>
    )
}

export default DeleteButton
