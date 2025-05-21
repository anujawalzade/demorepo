import React, { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";

function App() {
  const [userName, setUserName] = useState([
    { name: "Abhishek", age: 23 },
    { name: "Anuja", age: 22 },
    { name: "Akadh", age: 24 },
    { name: "Radha", age: 33 },
  ]);

  return <div>
    <Create/>
    <Read userName={userName} setUserName={setUserName}/>
  </div>;
}

export default App;
