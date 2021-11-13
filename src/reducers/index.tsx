import isLoggedReducer from "./isLogged";
import isSidebarOpen from "./isSidebarOpen";
import { combineReducers } from "redux";
const rootReducer = combineReducers({
  isLoggedReducer,
  isSidebarOpen,
});
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

