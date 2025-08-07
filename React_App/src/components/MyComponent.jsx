import React from "react";

function MyComponent({ fruits }) {
  return (
    // <div>
    //     {props.name = "gudu"}
    //   <h1>name:{props.name}</h1>
    //   <h1>age:{props.age}</h1>
    // </div>
    <ol>
      {fruits.map((fruit,i) => {
        return(
        <li key={i}>{fruit}</li>)
      })}
    </ol>
  );
}

export default MyComponent;
