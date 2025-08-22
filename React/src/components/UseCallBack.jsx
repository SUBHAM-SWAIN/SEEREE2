import React from "react";
import { useState, useCallback } from "react";
import Button from "./Button";

function UseCallBack() {
  let [count, setCount] = useState(0);
  let [click, setClick] = useState(0);

  const increment = useCallback(() => {
    setClick(click + 1);
  }, [click]);

  console.log("useCallBack Rendered");
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <h1>click:{click}</h1>
      <Button increment={increment} text={"Increment"}></Button>
    </div>
  );
}

export default UseCallBack;
