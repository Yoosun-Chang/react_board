import React, { useState } from "react";

function App() {
  const [dogs, setDogs] = useState(["말티즈"]);

  function onClickHandler() {
		// spread operator(전개 연산자)를 이용해서 dogs를 복사합니다. 
	  // 그리고 나서 항목을 추가합니다.
    setDogs([...dogs, "시고르자브르종"]);
  }

  console.log(dogs);
  return (
    <div>
      <button onClick={onClickHandler}>버튼</button>
    </div>
  );
}

export default App;