import React, { useMemo, useState } from "react";

function UseMemo() {
  let [count, setCount] = useState(0);

  let newCalculation = (num) => {
    return num * 2;
  };

  let myCount = useMemo(() => newCalculation(count), [count]);

  return (
    <div>
      <h1>count:{count}</h1>
      <h1>My count : {myCount}</h1>
      <button onClick={() => setCount(count + 1)}>increment</button>
    </div>
  );
}

export default UseMemo;
