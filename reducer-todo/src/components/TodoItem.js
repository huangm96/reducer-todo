import React from 'react'

const TodoItem = (props) => {
    
    let className = "task ";
    const handleCompletedToggle = () => {
        
      props.toggleCompleted(props.item);
    }
    if (props.item.completed) {
      className += "task-completed";
    }
    return (
      <>
        <p className={className} onClick={handleCompletedToggle}>
          {props.item.item}
        </p>
      </>
    );
}

export default TodoItem;