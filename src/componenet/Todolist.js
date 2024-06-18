import React, { useState } from "react";
/*
const Todolist = () => {
  const [arr, setarr] = useState([]);
  const [inputs, setInput] = useState("");

  return (
    <div>
      <input
        type="text"
        value={inputs}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setarr((prevArr) => [...prevArr, inputs]);
          setInput("");
        }}
      >
        Add
      </button>

      {arr.map((item, index) => (
  <div key={index}>
    <h1>{item}</h1>
    <button
      onClick={() => {
        const newValue = prompt("Enter new value:");
        setarr((prevArr) =>
          prevArr.map((el, i) => (i === index ? newValue : el))
        );
      }} // Correct placement of closing curly brace
    >
      Edit
    </button>
    <div>
      <button
        onClick={() => {
          setarr((x) =>
            x.filter((y, indi) => indi !== index)
          );
        }}
      >
        Remove
      </button>
    </div>
  </div>
))}


export default Todolist;
*/