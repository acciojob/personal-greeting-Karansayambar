
import React from "react";
import './../styles/App.css';
import { useState } from "react";


function App() {
  const [change, setChange] = useState();
  function makeChange(e) {
    setChange(e.target.value);
  }
  return (
    <div className="App">
      <label>Enter your name:</label>
      <input 
      value={change}
      onChange={makeChange}
      />
      {change.trim() !== "" ? <p>Hello, {change}!</p> : null}
    </div>
  );
}

export default App;
