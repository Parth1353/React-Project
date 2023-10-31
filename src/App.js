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
  const[description,setDescription]=useState("");
  return (
    <div className="form">
      <form className="realform">
        <h1 className="form-text">Add Task Here</h1>
        <div className="input1">
          <div class="label-float">
            <input type="text" placeholder=" " required onChange={(e) => setDescription(e.target.value)}  />
            <label>Task</label>
          </div>

          <input type="date" id="date"></input>
        </div>
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
