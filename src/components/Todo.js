import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Todo = ({id , task , deleteTodo}) => {
  return (
    <div className="todo-tasks">
      <p className={`${task.completed ? "completed" : "incompleted"}, task`}>{task}</p> 
      <div className="actions">
        <FontAwesomeIcon icon={faPen} className="edit" />
        <FontAwesomeIcon className="trash" icon={faTrash} onClick={()=> deleteTodo(id)}/>
      </div>
      

    </div>
  );
};

export default Todo;
