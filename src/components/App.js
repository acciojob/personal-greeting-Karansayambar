
import React from "react";
import './../styles/App.css';

const App = () => {
  const [change, setChange] = useState("");
  function handleChange(e){
    setChange(e.target.value);
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <label>Enter your name</label>
        <input
        value={change}
        onChange ={handleChange()}
        />
        {change.trim() !== "" ? <p>Hello {change}!</p> : null}
    </div>
  )
}

export default App
