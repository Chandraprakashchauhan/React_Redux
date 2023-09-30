export const incNumber = () => {
    return {
        type: "INCREMENT"
    }
}
export const decNumber = () => {
    return {
        type: "DECREMENT"
    }
}

export const addToCarti = (m) => {
    return {
        type: "ADDTOCARTI",
        payload: m

    }
}
export const addToCartd = (m) => {
    return {
        type: "ADDTOCARTD",


    }
}

