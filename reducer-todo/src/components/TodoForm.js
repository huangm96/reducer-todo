import React, { useState, useReducer } from "react";



const TodoItem = props => {
const [newTodo, setNewTodo] = useState("");


    const handleChange = e => {
      setNewTodo(e.target.value);
    };
    const handleaddItem = (e) => {
         e.preventDefault();
    
        props.addTodo(newTodo);
    };

  return (
    <>
      <form onSubmit={handleaddItem}>
        <input
          className="todo-input"
          type="text"
          name="todoInput"
          value={newTodo}
          onChange={handleChange}
        />
        <button >Add Item</button>
      </form>
    </>
  );
};

export default TodoItem;
