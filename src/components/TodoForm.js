import React, { useState } from 'react';

function TodoForm({addTodo})  {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(value){
            addTodo(value);
            setValue("");
        }
    }
    return (
        <form onSubmit={handleSubmit} className='TodoForm'>
                <input
                    type="text"     
                    onChange={(e)=> setValue(e.target.value)}
                    value={value}              
                    placeholder="What is the task today?"
                />
                <button type='submit' className='TodoForm-btn'>Add Task</button>
                
        </form>
    );
}

export default TodoForm;
