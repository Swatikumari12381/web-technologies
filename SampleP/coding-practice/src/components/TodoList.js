import { useState } from "react";

const TodoList = () => {
  const[task, setTask] = useState("")
  const[todo, setToDo] = useState([])

  const addToDo = ()=>{
    if(task.trim() === "") return;
    setToDo([...todo, task]);
    setTask("");
  };

  const deleteToDo = (index)=>{
    const updatedToDo=todo.filter((_, i)=> i !== index);
    setToDo(updatedToDo);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h2>To-Do List</h2>
      <input type="text" 
              placeholder="enter task" 
              value={task} 
              onChange={(e)=> setTask(e.target.value)}></input>
      <button onClick={addToDo}>Add</button>

      <ul>
        {todo.map((to,index) =>(
          <li key ={index}>
            {to}
            <button onClick={()=>deleteToDo(index)}>X</button></li>
          ))}
      </ul>
    </div>
    
  );
};

export default TodoList;
