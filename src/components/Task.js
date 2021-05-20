import React from 'react'
import DeleteButton from './PriorityBtn/DeleteButton'
import HighPriority from './PriorityBtn/HighPriority'
import LowPriority from './PriorityBtn/LowPriority'
import MedPriority from './PriorityBtn/MedPriority'
import NoPriority from './PriorityBtn/NoPriority'

//Lessons learnt:
//Put key prop in parent

//Things to fix:
//When entering long to-do, button gets out of proportion


const Task = ({ tasks, onDelete }) => {

    const assignPriority = (tasks) => {
        switch (tasks.priority) {
            case 'high':
                return <HighPriority />
            case 'med':
                return <MedPriority />
            case 'low':
                return <LowPriority />
            case 'none':
                return <NoPriority />
            default:
                return <NoPriority />
        }
    }

    return (
        <div className="p-0.5 my-2 bg-gray-800 rounded">
            <div className="flex text-white ml-1">
                <div className="w-full container">
                    {tasks.text}
                </div>
                <div className="flex w-full justify-end">
                    {assignPriority(tasks)}
                    <DeleteButton tasks={tasks} onDelete={onDelete} />
                </div>
            </div>
        </div>
    )
}

export default Task;
