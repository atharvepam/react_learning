import React, { useState } from "react";

function TodoList() {
    const[task,setTask] = useState(false);
  return (
    <div>
      <h1>Todo List</h1>
      <div className="addTask">
        <input type="text" placeholder="Enter a Task" />
        <button onClick={()=>{
            setTask(task)

        }}>ADD</button>
      </div>
      <div className="Task">
        <h3>Task to Complete</h3>
      </div>
    </div>
  );
}

export default TodoList;
