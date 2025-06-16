import React, { useState } from "react";
import TodoForm from "./TodoForm";
import EditTodoForm from "./EditTodoForm";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
// import { isEditable } from '@testing-library/user-event/dist/utils';

const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  //Add Todo
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  //Delete Todo

  const deleteTodo = (id) => {setTodos(todos.filter((todo) => todo.id !== id))};

  console.log("todo", todos);
  return (
    <div className="app-body">
      <h1>Web Development Task!</h1>
      <TodoForm addTodo={addTodo} />

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm />
        ) : (
          <Todo
            // key={todo.id}
            id={todo.id}
            task={todo.task}
            deleteTodo={deleteTodo}
            // editTodo={editTodo}
            // toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
