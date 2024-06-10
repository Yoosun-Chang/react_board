import { createStore } from "redux";
import { combineReducers } from "redux";
import boardReducer from "../modules/boardReducer";

const rootReducer = combineReducers({
    boardReducer,
});
const store = createStore(rootReducer);

export default store;