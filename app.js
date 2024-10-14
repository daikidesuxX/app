import React, { useState } from "react";
import 'E:/CODES ASSIGNMENTS/app.css';

const App = () => {
  const [stack, setStack] = useState([""]);
  const [input, setInput] = useState("");

  const handlePush = () => {
    if (input.trim()) {
      setStack([...stack, input]);
      setInput("");
    }
  };

  const handlePop = () => {
    setStack(stack.slice(0, -1));
  };

  return (
    <div className="container">
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)}  
      />
      <div className="buttons">
        <button onClick={handlePop}>Pop</button>
        <button onClick={handlePush}>Push</button>
      </div>
      <div className="stack-container">
        {Array(10).fill("").map((_, i) => (  
          <div key={i} className="stack-item">
            {stack[stack.length - 1 - i] || ""}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;