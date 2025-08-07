import React from "react";
import "./App.css";
import My_Component from "./components/My_Component";
import ClassComponent from "./components/ClassComponent";
import MyComponent from "./components/MyComponent";
import Conditional from "./components/Conditional";
import State from "./components/State";
import Form from "./components/Form";

function App() {
  let Element = [
    {
      name: "pen",
      price: 10,
      discount: "5%",
    },
    {
      name: "copy",
      price: 40,
      discount: "5%",
    },
    {
      name: "book",
      price: 100,
      discount: "5%",
    },
    {
      name: "phone",
      price: 15000,
      discount: "5%",
    },
  ];

  return (
    <div>
      {/* <MyComponent
        fruits={["Apple", "banana", "Grape", "Orange", "Mango"]}
      ></MyComponent> */}
      {/* <Conditional Element={Element}></Conditional> */}
      {/* <State></State> */}
      <Form></Form>
    </div>
  );
}

export default App;
