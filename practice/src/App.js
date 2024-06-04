import React from "react";

function Child(props) {
  return <div>{props.grandFatherName}</div>;
}

function Mother(props) {
  return <Child grandFatherName={props.grandFatherName} />;
}

function GrandFather() {
  const name = "유서니";
  return <Mother grandFatherName={name} />;
}

function App() {
  return <GrandFather />;
}

export default App;