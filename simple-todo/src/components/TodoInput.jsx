import { useState } from "react";

export const TodoInput = ({ getData }) => {
  const [text, setText] = useState("");
  const handelChange = (e) => {
    setText(e.target.value);
  };
  const handelData = () => {
    getData(text);
  };
  return (
    <>
      <input type="text" placeholder="Write something" onChange={handelChange} />
      
      <button onClick={() => getData(text)} className="plus">+</button>
     
    </>
  );
};