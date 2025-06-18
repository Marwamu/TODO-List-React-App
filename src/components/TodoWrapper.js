import React, { useState } from "react";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //Add Todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: true },
    ]);
  };

  //Delete Todo

  const deleteTodo = (id) => {setTodos(todos.filter((todo) => todo.id !== id))};

  // Toggle Complete Todo
  const toggleComplete = (obj) => {
    setTodos(
      todos.map((todo)=> todo.id === obj.id ? {
        ...todo, completed: ! obj.completed
      } : todo)
    )
  }


  //Edit Todo

  const editTodo = (obj) => {
    setTodos(
      todos.map((todo) =>
        todo.id === obj.id ? { ...todo, isEditable: ! obj.isEditable} 
       : todo)
    )
  }

  // Edit Task todo
  const editTask = (task, id) =>{
setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditable:!todo.isEditable} 
       : todo)
    )
  }

  console.log("todo", todos);
  return (
    <div className="app-body">
      <h1>Web Development Task!</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) =>
        todo.isEditable ? (
          <EditTodoForm 
           editTodo={editTask}
           todo={todo} 
            />
        ) : (
          <Todo
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
