import React from "react";

import TodoItem from "./TodoItem";
const TodoList = props => {
  console.log(props);

  return (
    <>
      <div>
        {props.state.map(item => {
          return (
            <TodoItem item={item} toggleCompleted={props.toggleCompleted} />
          );
        })}
      </div>
    </>
  );
};

export default TodoList;
