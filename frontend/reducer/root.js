import sessionReducer from "./session_reducer"
import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer"
import errorsReducer from "./errors_reducer"
import filtersReducer from "./filters_reducer";
import uiReducer from "./ui_reducer";

export default combineReducers({
  session: sessionReducer,
  entities: entitiesReducer,
  errors: errorsReducer,
  ui: uiReducer
  // filters: filtersReducer
})