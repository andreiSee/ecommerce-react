import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartItemsState = {
  cartItems: [],
};

const cartItemsSlice = createSlice({
  name: 'cartItems',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<Product>) => {
      state.cartItems.push({
        id: state.cartItems.length + 1,
        details: action.payload,
      });
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
  },
});

export const { addCartItem, removeCartItem } = cartItemsSlice.actions;

export default cartItemsSlice.reducer;
