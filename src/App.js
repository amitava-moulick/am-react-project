import "./App.css";
import { useState } from "react";

function App() {
  let [data, setData] = useState("Click to change");

  let [i, seti] = useState(0);
  function apple() {
    seti(i + 1);
    if (i % 2 == 0) {
      setData("Even");
    } else if (i % 2 == 1) {
      setData("Odd");
    } else {
      setData("nothing");
    }
  }

  return (
    <>
      <h1>{data}</h1>
      <button onClick={apple}>Click me</button>
      <h2>Present number is: {i}</h2>
    </>
  );
}

export default App;
