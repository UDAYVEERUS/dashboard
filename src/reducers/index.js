import { combineReducers } from "redux";
import reducers from "./variables";

const reducer  = combineReducers({
    "variables" : reducers
})

export default reducer