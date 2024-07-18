import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartItemsState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<Product>) => {
      const currentCartItems = current(state.cartItems);

      // Only add product if not already in cart
      const inCart = currentCartItems.filter((item) => {
        return item.details.id === action.payload.id;
      });

      if (inCart.length === 0) {
        state.cartItems.push({
          id: state.cartItems.length + 1,
          details: action.payload,
        });
      }
    },
    removeCartItem: (state, action: PayloadAction<number>) => {
      state.cartItems = state.cartItems.filter(
        (cartItem) => cartItem.id !== action.payload
      );
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;

export default cartSlice.reducer;
