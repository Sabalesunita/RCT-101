import React, {useState} from "react";

const Todo = ({ todo, remove, edit }) => {
  const [mode] = useState("list");
  const [text, setText] = useState(todo.text);
  return (
    <div className="Todo">
      {mode === "list"
        ? <>
          <span className="TodoText">{todo.text}</span>
          <button className="RemoveTodo" onClick={remove}>Delete</button>
        </>
        : <>
          <input value={text} onChange={e => setText(e.target.value)} className="EditTodoInput" />
          
        </>}
    </div>
  );
}

export default Todo;