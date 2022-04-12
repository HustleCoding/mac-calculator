import "./style.css";
import { render } from "react-dom";
import Button from "./Button";
import { useState, useEffect, FC } from "react";
import * as React from "react";

export const App: FC = (): JSX.Element => {
  const [preState, setPreState] = useState<string>("");
  const [curState, setCurState] = useState<string>("");
  const [input, setInput] = useState<string>("0");
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

render(<App />, document.getElementById("root"));
