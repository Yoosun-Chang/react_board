// 추가된 코드 👇 - 액션 value를 상수들로 만들어 줍니다. 보통 이렇게 한곳에 모여있습니다.
const PLUS_ONE = "PLUS_ONE";
const MINUS_ONE = "MINUS_ONE";
const ADD_NUMBER = "ADD_NUMBER";

// 추가된 코드 👇 - Action Creator를 만들어 줍니다. 
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const addNumber = (payload) => {
    return {
      type: ADD_NUMBER,
      payload,
    };
  };

// 초기 상태값
const initialState = {
  number: 0,
};

// 리듀서
const counter = (state = initialState, action) => {
    switch (action.type) {
      case ADD_NUMBER:
        return {
          // state.number (기존의 nubmer)에 action.paylaod(유저가 더하길 원하는 값)을 더한다.
          number: state.number + action.payload,
        };
      default:
        return state;
    }
  };


export default counter;