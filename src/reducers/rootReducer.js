import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import dataReducer from "./dataReducer";

const allReducers = combineReducers({
  dataReducer,
  form: formReducer
});

export default allReducers;
