/// <reference types="vite/client" />

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  currency: string;
  img: string;
};

type CartItem = {
  id: number;
  details: Product;
};

type CartItemsState = {
  cartItems: CartItem[];
};
