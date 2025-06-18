import React, { useState } from 'react';

const EditTodoForm = ({ editTodo, todo }) => {
     const [value, setValue] = useState(todo.task);

     const handleSubmit = (e) => {
         e.preventDefault();
   
             editTodo(value, todo.id);
     }
     return (
         <form onSubmit={handleSubmit} className='TodoForm'>
                 <input
                     type="text"     
                     onChange={(e)=> setValue(e.target.value)}
                     value={value}              
                     placeholder="Update Task..."
                 />
                 <button type='submit' className='TodoForm-btn'>Add Task</button>
                 
         </form>
     );
}

export default EditTodoForm;
