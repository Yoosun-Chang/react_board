import React, { useState } from "react";

function App() {
  const [name, setName] = useState("길동이");

  function onClickHandler() {
    setName("누렁이");
  }

  return (
    <div>
      {name}
      <button onClick={onClickHandler}>버튼</button>
    </div>
  );
}

export default App;