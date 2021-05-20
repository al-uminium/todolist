import TaskHeader from './components/TaskHeader';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { useState } from 'react';


function App() {

  //States
  const [tasks, setTask] = useState([])

  //without the spread operator it will return an object, not the element inside the object.
  const addTask = (task) => {
    let id = tasks.length+1
    const newTask = { id, ...task }
    setTask([...tasks, newTask])
  }

  const deleteTask = (id) => {
    const del = tasks.filter(task => task.id !== id)
    setTask(del)
  }

  return (
    <div className="md:py-3 sm:py-0">
      <div className="mx-auto lg:w-2/5 md:w-3/5 sm:w-auto p-4 bg-indigo-800 rounded shadow-lg">
        <TaskHeader />
        <AddTask onAdd={addTask} />
        {(tasks.length) ? <p className="mt-2 text-gray-100">Tasks to be done</p> : <p className="mt-2 text-gray-100">No tasks left!</p>}
        <Tasks onDelete={deleteTask} tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
