import React from "react";
import { createRoot } from "react-dom";
const root = createRoot(document.getElementById("root"));

const App = () => {
  //state
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello World</h1>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

root.render(<App />);
