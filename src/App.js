import "./style.css";
import { render } from "react-dom";
import Button from "./Button";

const App = () => {
  return (
    <div>
      <Button />
    </div>
  );
};

export default App;

render(<App />, document.getElementById("root"));
