// features/dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define the async thunk

const initialState = {
    data: null,
};

export const postData = createAsyncThunk(
    'data/postData',
    async (data, thunkAPI) => {
        try {
            const response = await fetch('https://dummyjson.com/products/add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            return responseData;
        } catch (error) {
            return thunkAPI.rejectWithValue({ error: error.message });
        }
    }
);

export const dataSlice = createSlice({
    name: "data",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(postData.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export default dataSlice.reducer;
