import React, { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    let input = e.target.name;
    // console.log(`you clicked me ${e.target.name}`);
    setDisplay(display.concat(input));
  };

  const handleSolve = (e) => {
    e.preventDefault();
    // console.log("solving");
    try{
      let result = eval(display)
      setDisplay(result.toString());
      if (result === Infinity) {
        result = "Can't devide by 0"
        setDisplay(result.toString());
      }
    } catch(err){
      setDisplay("error");
    }
    
    
  };

  const handleClear = (e) => {
    e.preventDefault();
    setDisplay("");
  };

  const handleBackSpace = (e) => {
    setDisplay(display.slice(0, -1));
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container">
        <form className="screen">
          <input type="text" value={display} />
        </form>
        <div className="keys">
          <button onClick={handleClear} id="clear">Clear</button>
          <button name="/" onClick={handleClick} id="operation">
            &divide;
          </button>
          <button onClick={handleBackSpace} id="operation"> del </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button name="*" onClick={handleClick} id="operation">
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button name="-" onClick={handleClick} id="operation">
            -
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button name="+" onClick={handleClick} id="operation">
            +
          </button>
          <button name="=" onClick={handleSolve} id = "result">
            =
          </button>
          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

