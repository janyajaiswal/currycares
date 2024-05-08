import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import restaurants from "/Users/janyajaiswal/Desktop/SDP/currycares/src/data/restaurants.js";

const initialState = {
    products: [],
    error: null,
    status: 'idle',
}

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = 'fulfilled';
            state.products = action.payload.map(restaurant => ({
                name: restaurant.name,
                breakfast_veg: restaurant.breakfast_veg,
                breakfast_nonveg: restaurant.breakfast_nonveg,
                lunch_veg: restaurant.lunch_veg,
                lunch_nonveg: restaurant.lunch_nonveg,
                dinner_veg: restaurant.dinner_veg,
                dinner_nonveg: restaurant.dinner_nonveg,
            }));
            state.error = null;
        });
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.status = 'pending';
            state.error = null;
        });
        builder.addCase(fetchProducts.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.error.message;
        });
    }
});

export const { getProducts } = productSlice.actions;
export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('products/fetchPosts', async () => {
    return restaurants;
});

export const selectAllProducts = state => state.products.products;
