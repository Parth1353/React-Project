import React, { useState } from 'react';
import './App.css';

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
  return(
    <div className='form'>
      <h1 className='form-text'>Add Task Here</h1>
      <form className='realform'></form>
    </div>
  );
}
