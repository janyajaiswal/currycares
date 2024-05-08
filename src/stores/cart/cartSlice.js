import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { type } = action.payload;
            const newProduct = { type, amount: 1 };
            return { products: [...state.products, newProduct] };
        },
        clearCart: (state) => {
            return { products: [] };
        },
        incrementProductAmount: (state, action) => {
            const { id } = action.payload;
            return {
                products: state.products.map(product =>
                    product.id === id ? { ...product, amount: product.amount + 1 } : product
                )
            };
        },
        decrementProductAmount: (state, action) => {
            const { id } = action.payload;
            return {
                products: state.products.map(product =>
                    product.id === id ? { ...product, amount: product.amount - 1 } : product
                )
            };
        }
    }
});

export const cartProducts = state => state.cart.products;

export const { addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions;

export default cartSlice.reducer;
