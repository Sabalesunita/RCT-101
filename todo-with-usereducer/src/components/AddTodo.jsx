import React, {useState} from "react";

const AddTodo = ({add}) => {

  const [text, setText] = useState("");

  return (

    <div className="AddTodo">
      <input 
      value={text} 
      onChange={e => setText(e.target.value)} 
      className="AddTodoInput"  
      placeholder="Add todo input here...."
      />
      <button className="AddTodoButton" onClick={() => {add(text); setText("")}}>
        Add
        </button>
    </div>
  );
}

export default AddTodo;