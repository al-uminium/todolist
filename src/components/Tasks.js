import React from 'react'
import Task from './Task'

//Key prop in parent! Not child element!

const Tasks = ({ tasks, onDelete }) => {
    return (
        <div>
            <div className="mt-4">
                {tasks.map((tasks) => (
                    <Task onDelete={onDelete} key={tasks.id} tasks={tasks} />
                ))}
            </div>
        </div>
    )
}

export default Tasks
