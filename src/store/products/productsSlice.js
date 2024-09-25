import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: null,
};

export const getProducts = createAsyncThunk("products/getProducts", async () => {
    const result = await axios.get(`https://dummyjson.com/products?limit=100`);
    const data = result.data.products

    return data;
});


export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        sortProducts: (state, action) => {
            state.items?.sort((a, b) => {
                if (a[action.payload] > b[action.payload]) {
                    return 1;
                } else {
                    return -1;
                }
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.items = action.payload;
        });
    },
});


export const { sortProducts } = productsSlice.actions;

export default productsSlice.reducer;

