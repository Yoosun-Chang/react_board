import React from "react";
import { useDispatch, useSelector } from "react-redux"; // import 해주세요.

const App = () => {
  const dispatch = useDispatch(); // dispatch 생성

  const number = useSelector((state) => state.counter.number); 

  console.log(number);

  return (
    <div>
      {number}
      <button
				// 이벤트 핸들러 추가
        onClick={() => {
					// 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          dispatch({ type: "PLUS_ONE" }); 
        }}
      >
				+ 1
      </button>

      <button
				// 이벤트 핸들러 추가
        onClick={() => {
					// 마우스를 클릭했을 때 dispatch가 실행되고, ()안에 있는 액션객체가 리듀서로 전달된다.
          dispatch({ type: "MINUS_ONE" }); 
        }}
      >
				- 1
      </button>

    </div>
  );
};

export default App;