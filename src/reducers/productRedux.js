import Product from '../models/Product';

const ADD_TO_CART = 'addToCart'
const REMOVE_FROM_CART = 'removeFromCart'

const initialState = [
    new Product(1, "iPhone 15", 1500, "https://m.media-amazon.com/images/I/71nvkHnPpZL._SL1500_.jpg"),
    new Product(2, "iPhone 14", 1400, "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg"),
    new Product(3, "iPhone 13", 1300, "https://m.media-amazon.com/images/I/71X6mnUDSzL._SL1500_.jpg"),
    new Product(4, "iPhone 12", 1200, "https://m.media-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"),
    new Product(5, "iPhone 11", 1100, "https://m.media-amazon.com/images/I/71QE00iB9IL._SL1500_.jpg"),
    new Product(6, "iPhone X", 1000, "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcToNs_tvJZsACrtdIWY9MUUs2hRXhCw58f0snzPu1UyEyEm2OqSm9xL63FuIN7YwyspqCVVWGK5xYpKDeVRp6VbUk_bY4xXpA9_N8LtmduWfrUI0BN-Lcmy2GCfXO0jCL3YBvDnfQ&usqp=CAc"),
    new Product(7, "iPhone SE", 950, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg"),
    new Product(8, "iPhone 8", 930, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg"),
    new Product(9, "iPhone 7", 900, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7-plus-r2.jpg"),
    new Product(10, "iPhone 6", 8800, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-4.jpg"),
    new Product(11, "iPhone 5", 850, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5-ofic.jpg"),
    new Product(12, "iPhone 4", 830, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-4s-new.jpg"),
    new Product(13, "iPhone 3", 800, "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-3gs-ofic.jpg"),

];

export const addToCart = id => ({
    type: ADD_TO_CART,
    payload: { id }
});



export const removeFromCart = id => ({
    type: REMOVE_FROM_CART,
    payload: { id }
});


export const productList = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART:
            console.log(action.payload.id);
            let result = state.map(todo => {
                if (todo.id !== action.payload.id) return todo
                return {
                    ...todo,
                    countCart: todo.countCart + 1
                }
            });

            console.log(result);
            return result;

        case REMOVE_FROM_CART:
            return state.map(todo => {
                if (todo.id !== action.payload.id) return todo

                return {
                    ...todo,
                    countCart: todo.countCart - 1
                }
            });

        default:
            return state;
    }
}


