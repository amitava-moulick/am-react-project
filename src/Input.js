import { useState } from "react";
function Input(props) {
  let [data1, setData1] = useState(null);
  function getData(val) {
    setData1(val.target.value);
  }
  return (
    <div className="App">
      <h1>Get input box value</h1>
      <input type="text" placeholder="input data" onChange={getData}></input>
      <h2>The input data: {data1}</h2>
    </div>
  );
}
export default Input;
