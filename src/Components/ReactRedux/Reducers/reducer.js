import changeTheNumber from "./UpDown";
import MuliDiviTheNumber from "./MultDiv";


import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber,MuliDiviTheNumber
});

export default rootReducer;