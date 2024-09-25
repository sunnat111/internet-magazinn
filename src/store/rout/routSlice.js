import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    rout: null
}

export const getRout = createAsyncThunk("rout/getRout", async (id) => {
    const result = await axios.get(`https://dummyjson.com/products/${id}`);
    const data = await result.data;

    return data;
})

export const routSlice = createSlice({
    name: "rout",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getRout.fulfilled, (state, action) => {
            state.rout = action.payload
        })
    }
})


export default routSlice.reducer