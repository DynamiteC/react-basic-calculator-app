import './App.css';
import {useState} from "react";
import Calculator from "./Calculator";

function App() {

  const [calc, setCalc] = useState(false)


  return (
    <div className="App">
      {calc ? <Calculator/> : <header className="App-header">
          Simple Calculator App
          <button className={"App-link"} onClick={() => setCalc(true)}>Start Calc</button>
        </header>
      }
    </div>
  );
}

export default App;
