// import changeTheNumber from "./upown";

import { addToCart, removeFromCart, productList } from "./productRedux";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addToCart, removeFromCart, productList
})

export default rootReducer;