import "./style.css";
import { render } from "react-dom";
import Button from "./Button";
import { useState, useEffect } from "react";

const App = () => {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);

  return (
    <div>
      <Button
        preState={preState}
        setPreState={setPreState}
        setCurState={setCurState}
        input={input}
        operator={operator}
        setOperator={setOperator}
        total={total}
        setTotal={setTotal}
        setInput={setInput}
        curState={curState}
      />
    </div>
  );
};

export default App;

render(<App />, document.getElementById("root"));
