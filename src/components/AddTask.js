import { useState } from "react";
import Priority from "./Priority";

const AddTask = ({ onAdd }) => {
  //States  
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
        return
    }

    onAdd({ text, priority });

    setText("");
    setPriority("")
  };

  const choosePriority = (e) => {
      setPriority(e.target.id)
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <div className="flex justify-between">
          <input
            type="text"
            className="p-1 w-3/4 bg-blue-50 rounded shadow"
            placeholder="Enter task!"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="flex justify-end">
            <Priority onChoose={choosePriority} />
            <input
                type="submit"
                className="p-1 bg-blue-500 rounded-xl text-white hover:bg-blue-300 transition-colors duration-300"
                value="Add Task"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
