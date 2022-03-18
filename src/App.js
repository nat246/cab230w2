import React from "react";
import "./styles.css";

const animals = [
  {
    name: "Lion",
    number: 3,
    eats: ["zebra", "antelope", "buffalo"]
  },
  {
    name: "Tiger",
    number: 5,
    eatas: ["moose", "deer", "buffalo"]
  }
];

export default function App() {
  return (
    <div className="App">
      <h1>Hello CAB230</h1>
      <h2>Start Editing To See some magic happen!</h2>

      {animals.map((animal) => (
        <p>{animal}</p>
      ))}
    </div>
  );
}
