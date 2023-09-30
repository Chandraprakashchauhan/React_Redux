import changeTheNumber from "./upown";
import countCart from "./countCart";

import { combineReducers } from "redux";

const rootReducer = combineReducers({

    changeTheNumber,
    countCart

})

export default rootReducer;