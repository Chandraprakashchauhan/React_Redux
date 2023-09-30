const initialState = 0;
const countCart = (state = initialState, action) => {

    switch (action.type) {
        case "ADDTOCARTI":
            return state + 1;

        case "ADDTOCARTD":
            return state - 1;

        default:
            return state;
    }
}

export default countCart;

