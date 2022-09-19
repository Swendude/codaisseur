import React, { useState } from "react";

import "./App.css";
import StudentCard from "./components/StudentCard";

// interface Student {
//   name: string;
//   age: number;
// }

const handleClick = (event: React.MouseEvent) => {
  console.log("Hello!");
};

function App() {
  return (
    <div className="App">
      <StudentCard name="Swen" age={29} />
      <StudentCard name="Tim" age={30} />
      <button onClick={handleClick}></button>
    </div>
  );
}

export default App;
