import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./products/productsSlice.js";
import routSlice from "./rout/routSlice.js";
import dataSlice from "./products/dataSlice.js";

export const store = configureStore({
    reducer: {
        products: productsSlice,
        porducts: dataSlice,
        rout: routSlice,
    },
});
