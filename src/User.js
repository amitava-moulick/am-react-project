import React from "react";
function User(props) {
  let xyz = "alert from child";
  return (
    <>
      <h1>test text</h1>
      <button onClick={() => props.data(xyz)}>Click here</button>
    </>
  );
}
export default User;
