import React, { useState, useReducer } from "react";
import { initialState, todoListReducer } from "./reducers/todoListReducer";
import './App.css';
import TodoList from './components/TodoList'
import TodoFrom from  './components/TodoForm'

function App() {
  const [state, dispatch] = useReducer(todoListReducer, initialState);
  const addTodo = item => dispatch({ type: "ADD_TODO", payload: item });
  const toggleCompleted = item =>
    dispatch({ type: "TOGGLE_COMPLETED", payload: item });
  const clearCompleted = () => dispatch({ type: "CLEAR_COMPLETED" });

  console.log(state)
  return (
    <div className="App">
      <h1>TODO-List App</h1>
      <TodoFrom addTodo={addTodo}/>
      <TodoList state={state} toggleCompleted={toggleCompleted} clearCompleted={clearCompleted}/>
      
    </div>
  );
}

export default App;
