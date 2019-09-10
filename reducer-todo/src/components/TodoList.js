import React from "react";

import TodoItem from "./TodoItem";
const TodoList = props => {
  console.log(props);
    const handleClean = (e) => {
         e.preventDefault();
         props.clearCompleted();
        
}
  return (
    <>
      <div>
        {props.state.map(item => {
          return (
            <TodoItem item={item} toggleCompleted={props.toggleCompleted} />
          );
        })}
              <button onClick={handleClean}>Clear Completed</button>
      </div>
    </>
  );
};

export default TodoList;
