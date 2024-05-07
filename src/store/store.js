import {combineReducers, createStore} from "redux";
import {gamesReducer} from "./reducer";

const rootReducer = combineReducers({
  games: gamesReducer,
})

export const store = createStore(rootReducer);
