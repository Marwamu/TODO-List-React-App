import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const Todo = ({todo, deleteTodo, editTodo , toggleComplete}) => {
  return (
    <div className="todo-tasks">
      <p className={`${todo.completed ? "completed" : "incompleted"} task` } onClick={()=> toggleComplete(todo)}>{todo.task}</p> 
      <div className="actions">
        <FontAwesomeIcon icon={faPen} className="edit" onClick={()=> editTodo(todo)} />
        <FontAwesomeIcon className="trash" icon={faTrash} onClick={()=> deleteTodo(todo.id)}/>
      </div>
      

    </div>
  );
};

export default Todo;
