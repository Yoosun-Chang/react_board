import React, { useState } from "react";

function Child(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.setName("박할아");
        }}
      >
        할아버지 이름 바꾸기
      </button>
      <div>{props.grandFatherName}</div>
    </div>
  );
}

function Mother(props) {
  return (
    <Child grandFatherName={props.grandFatherName} setName={props.setName} />
  );
}

function GrandFather() {
  const [name, setName] = useState("김할아");
  return <Mother grandFatherName={name} setName={setName} />;
}

function App() {
  return <GrandFather />;
}

export default App;