import React, {useState} from "react";
import "./Calculator.css";
import OperatorButton from "./OperatorButton";

function Calculator() {
  const [display, setDisplay] = useState("0");
  const [currentValue, setCurrentValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operator, setOperator] = useState("");

  const handleButtonClick = (value) => {
    if (!isNaN(value) || value === ".") {
      setCurrentValue((prev) => prev + value);
      setDisplay((prevDisplay) => {
        if (prevDisplay === "0" || operator) {
          return value;
        } else {
          return prevDisplay + value;
        }
      });
    } else if (value === "AC") {
      clearDisplay();
    } else if (value === "=") {
      calculateResult();
    } else {
      setPrevValue(currentValue);
      setCurrentValue("");
      setOperator(value);
    }
  };

  const clearDisplay = () => {
    setCurrentValue("");
    setPrevValue("");
    setOperator("");
    setDisplay("0");
  };

  const calculateResult = () => {
    const prevNum = parseFloat(prevValue);
    const currentNum = parseFloat(currentValue);

    if (operator === "+") {
      setDisplay(String(prevNum + currentNum));
    } else if (operator === "-") {
      setDisplay(String(prevNum - currentNum));
    } else if (operator === "*") {
      setDisplay(String(prevNum * currentNum));
    } else if (operator === "/") {
      setDisplay(String(prevNum / currentNum));
    }

    setCurrentValue("");
    setPrevValue("");
    setOperator("");
  };

  // Handle keyboard events
  const handleKeyDown = (event) => {
    const {key} = event;
    if (/[0-9.]/.test(key)) {
      handleButtonClick(key);
    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
      handleButtonClick(key);
    } else if (key === "=" || key === "Enter") {
      handleButtonClick("=");
    } else if (key === "Escape") {
      handleButtonClick("AC");
    }
  };

  // Attach event listener for keyboard events
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="calculator">
      <div className="display">{display}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("AC")}>AC</button>
        <OperatorButton operator={"/"} onClick={handleButtonClick}/>
        <OperatorButton operator={"*"} onClick={handleButtonClick}/>
        <OperatorButton operator={"-"} onClick={handleButtonClick}/>
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <OperatorButton operator={"+"} onClick={handleButtonClick}/>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick(".")}>.</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <div/>
        <button onClick={() => handleButtonClick("0")}>0</button>
      </div>
    </div>
  );
}

export default Calculator;