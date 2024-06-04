import React from "react";

function Child(props) {
  console.log(props)
  return <div>{props.motherName}</div>;
}

function Mother() {
  const name = '유서니';
  return <Child motherName={name}/>;
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App;