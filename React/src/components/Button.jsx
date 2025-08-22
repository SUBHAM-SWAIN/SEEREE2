import React from "react";
import { memo } from "react";

function Button({increment, text}) {
    console.log("Button Rendered");
  return (
    <div>
      <button onClick={increment}>{text} </button>
    </div>
  );
}

export default memo(Button);
