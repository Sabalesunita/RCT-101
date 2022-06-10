import React, { useReducer } from "react";
import { initialState, reducer } from '../reducers/todo.reducer';
import Todo from "./Todo.jsx";
import AddTodo from "./AddTodo.jsx";

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
  <>
    <AddTodo
      add={text => dispatch({type: "add", text: text})}
    />
    {state.todos.map(t => (
      <Todo
        key={t.id}
        todo={t}
        remove={() => dispatch({type: "remove", id: t.id})}
      />
    ))}
  </>);
}
export default TodoApp;