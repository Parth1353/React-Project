//just trying to make it work like global and add hooks concept and sending props
import React, { useState } from "react";
import "./index.css";
const item = [
  {
    id: 1,
    description: "Book a Train Ticket",
    date:22/12/2023
  },
  {
    id: 2,
    description: "Book a bus Ticket",
    date:22/12/2023
  },
];
export default function App() {
  const [description, setDescription] = useState(item);
  const [date, setDate] = useState("");
  return (
    <div>
      <Headers />
      <Main />
      <Display/>
    </div>
  );
}

function Headers() {
  return (
    <div className="top">
      <h1 className="t-text">Todo-List</h1>
    </div>
  );
}

function Main({description}) {
 
  function handleSub(e) {
    e.preventDefault();
    console.log("Task description:", description);
    console.log("Task date:", date);
    setDescription("");
  }

  return (
    <div className="form">
      <form className="realform" onSubmit={handleSub}>
        <h1 className="form-text">Add Task Here</h1>
        <div className="input1">
          <div className="label-float">
            <input
              type="text"
              placeholder=" "
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <label>Task</label>
          </div>
          <input
            type="date"
            id="date"
            onChange={(e) => setDate(e.target.value)}
          ></input>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}
function Display()