import React, { useState } from "react";

function Child(props) {
  return <div>{props.grandFatherName}</div>;
}

function Mother(props) {
  return <Child grandFatherName={props.grandFatherName} />;
}

function GrandFather() {
  const [name, setName] = useState("김할아"); // state를 생성
  return <Mother grandFatherName={name} />;
}

function App() {
  return <GrandFather />;
}

export default App;