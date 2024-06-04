import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const onChangeHandler = (event) => {
    const inputValue = event.target.value;
    setValue(inputValue);
  };

	console.log(value) // value가 어떻게 변하는지 한번 콘솔로 볼까요?

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={value} />
    </div>
  );
};

export default App;