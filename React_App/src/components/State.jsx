import React, { useState } from "react";

function State() {
  let [count, setCount] = useState(0);
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>incerase</button>
    </div>
  );
}

export default State;
