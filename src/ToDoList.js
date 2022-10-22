import React, { useState } from "react";
import Item from "./Item";

const ToDoList = () => {
  const [Name, setName] = useState("");
  const [Describe, setDescribe] = useState("");
  const [Arr, setArr] = useState([]);
  const changeName = (event) => {
    setName(event.target.value);
  };
  const changeDescribe = (event) => {
    setDescribe(event.target.value);
  };
  const remove1 = (event) => {
    const arr = Arr;
    console.log(event.target.parentNode);
    delete arr[arr.indexOf(event.target.parentNode)];
    setArr([...arr]);
    console.log(arr);
  };
  const addToArr = () => {
    setArr([
      ...Arr,
      <Item name={Name} describe={Describe} remove1={remove1} />,
    ]);
    // setName("");
    // setDescribe("");
    console.log(Arr);
  };
  const items = Arr.map((item) => {
    return <div>{item}</div>;
  });
  return (
    <div>
      <input type="text" value={Name} onChange={changeName} />
      <input type="text" value={Describe} onChange={changeDescribe} />
      <button onClick={addToArr}>add</button>
      <div>{items}</div>
    </div>
  );
};

export default ToDoList;
