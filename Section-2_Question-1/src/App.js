import { useEffect, useState } from "react";
import "./styles.css";

const App = (props) => {
  let [number, setNumber] = useState("");
  let [mode, setMode] = useState("isPrime");
  let [result3, setResult3] = useState("");

  useEffect(() => {});

  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false;
    return num > 1;
  };

  const fibonacci = (num) => {
    if (num <= 1) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);
  };

  const isInt = (value) => {
    if (isNaN(value)) {
      return false;
    }
    var x = parseFloat(value);
    return (x | 0) === x;
  };

  const updatView3 = (_mode, _number) => {
    let _mes = "false";
    if (isInt(_number)) {
      if (_mode === "isPrime") {
        if (isPrime(_number)) {
          _mes = "true";
        }
      } else if (_mode === "isFibanacci") {
        if (fibonacci(_number)) {
          _mes = "true";
        }
      }
    }

    setMode(_mode);
    setNumber(_number);
    setResult3(_mes);
  };

  const view1 = () => {
    return (
      <div>
        <input
          value={number}
          onChange={(e) => {
            updatView3(mode, e.target.value);
          }}
        />
      </div>
    );
  };

  const view2 = () => {
    return (
      <div>
        <select
          value={mode}
          onChange={(e) => {
            updatView3(e.target.value, number);
          }}
        >
          <option value="isPrime">isPrime</option>
          <option value="isFibanacci">isFibanacci</option>
        </select>
      </div>
    );
  };

  const view3 = () => {
    return <div>{result3}</div>;
  };

  return (
    <div className="App">
      <div class="left column">{view1()}</div>
      <div class="center column">{view2()}</div>
      <div class="right column">{view3()}</div>
    </div>
  );
};

export default App;
