import { createContext  } from "react";

const store = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {},
});

export default store;