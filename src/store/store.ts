import { configureStore } from '@reduxjs/toolkit';
import cartItemsReducer from '../slices/cartItemsSlice';

const store = configureStore({
  reducer: {
    cartItems: cartItemsReducer,
  },
});
export default store;
