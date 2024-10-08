import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

const initialState: CartItemsState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCartItem: (state, action: PayloadAction<SelectedProduct>) => {
      const currentCartItems = current(state.cartItems);

      // Only add product if not already in cart
      const inCart = currentCartItems.filter(
        (item) => item.details.id === action.payload.id
      );

      if (inCart.length === 0) {
        const cartItemIds = currentCartItems
          .map((cartItem) => cartItem.id)
          .sort();
        const maxCartItemId = cartItemIds[cartItemIds.length - 1] || 0;

        state.cartItems.push({
          id: maxCartItemId + 1,
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
