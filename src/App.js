import React, { useState } from "react";
import "./index.css"; // Ensure that your CSS file path is correct

export default function App() {
  return (
    <div>
      <Headers />
      <Main />
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

function Main() {
  const [description, setDescription] = useState("");

  function handleSub(e) {
    e.preventDefault();
    // Perform actions with the form data (e.g., submit to a database)
    console.log("Task description:", description);
    // Reset the description state or perform any other action after form submission
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
          <input type="date" id="date"></input>
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}
