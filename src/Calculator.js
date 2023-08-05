import React, {useState} from "react";
import "./Calculator.css";
import OperatorButton from "./OperatorButton";

function Calculator() {
  const [display, setDisplay] = useState(0);
  const [currentValue, setCurrentValue] = useState(0);

  const handleInputText = (e) => {
    setCurrentValue(e.target.value);
  }

  const handleButtonClick = (value) => {
    if (value === "RESET RESULT") {
      setDisplay(0)
    } else if (value === "RESET INPUT") {
      setCurrentValue(0);
    } else if (["ADD", "SUB", "MUL", "DIV"].includes(value) && currentValue) {
      let lastValue = parseFloat(display);
      let operationValue = parseFloat(currentValue)
      if (value === "ADD") {
        setDisplay(lastValue + operationValue);
      } else if (value === "SUB") {
        setDisplay(lastValue - operationValue);
      } else if (value === "MUL") {
        setDisplay(lastValue * operationValue);
      } else if (value === "DIV") {
        setDisplay(lastValue / operationValue);
      }
      setCurrentValue(0)
    }
  };

  return (<>
      <h1>Calculator</h1>
      <div className={"calculator"}>
        <h1>{display}</h1>
      </div>
      <div className="calculator">
        <input type={"number"} className="display" autoFocus={true} value={currentValue}
               onChange={handleInputText}/>
        <div className="buttons">
          <OperatorButton operator={"ADD"} onClick={handleButtonClick}/>
          <OperatorButton operator={"SUB"} onClick={handleButtonClick}/>
          <OperatorButton operator={"MUL"} onClick={handleButtonClick}/>
          <OperatorButton operator={"DIV"} onClick={handleButtonClick}/>
          <OperatorButton operator={"RESET RESULT"} onClick={handleButtonClick}/>
          <OperatorButton operator={"RESET INPUT"} onClick={handleButtonClick}/>
        </div>
      </div>
    </>
  );
}

export default Calculator;