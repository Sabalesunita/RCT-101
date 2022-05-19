import { useState } from "react";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
import { nanoid } from "nanoid";

export const Todo = () => {
  const [List, setList] = useState([]);
  const getData = (data) => {
    const payload = {
      title: data,
      status: false,
      id: nanoid(7)
    };

    setList([...List, payload]);
  };
  const handelToggel = (id) => {
    const updatedList = List.filter(function (a) {
      if (a.id !== id) {
        return true;
      } else {
        return false;
      }
    });
    setList(updatedList);
  };
  return (
    <>
      <TodoInput getData={getData} />
      {List.map((e, i) => (
        <TodoItem key={e.id} {...e} handelToggel={handelToggel} />
      ))}
    </>
  );
};