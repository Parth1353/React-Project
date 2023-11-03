import React, { useState } from "react";
import "./index.css";

const item = [
  {
    id: 1,
    description: "Book a Train Ticket",
    date: "22/12/2023",
  },
  {
    id: 2,
    description: "Book a bus Ticket",
    date: "22/12/2023",
  },
  {
    id: 2,
    description: "Book a bus Ticket",
    date: "22/12/2023",
  },
  {
    id: 2,
    description: "Book a bus Ticket",
    date: "22/12/2023",
  },
  {
    id: 2,
    description: "Book a bus Ticket",
    date: "22/12/2023",
  },
  {
    id: 2,
    description: "Book a bus Ticket",
    date: "22/12/2023",
  },{
    id: 2,
    description: "Book a bus Ticket",
    date: "22/12/2023",
  },
  
  
];

export default function App() {
  const [tasks, setTasks] = useState(item);
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div>
      <Headers />
      <Main
        description={description}
        setDescription={setDescription}
        date={date}
        setDate={setDate}
        addTask={addTask}
      />
      <Display tasks={tasks} />
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

function Main({ description, setDescription, date, setDate, addTask }) {
  function handleSub(e) {
    e.preventDefault();
    console.log("Task description:", description);
    console.log("Task date:", date);
    if (description !== "") {
      addTask({ id: Date.now(), description, date });
      setDescription("");
      setDate("");
    }
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
            value={date}
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

function Display({ tasks }) {
  return (
    <div>
      <h2 className="he">Tasks:</h2>
      <div className="display-tasks">
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.description} - {task.date}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
