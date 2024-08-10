/// <reference types="vite/client" />

type Product = {
  id: number;
  name: string;
  teaser: string;
  price: number;
  currency: string;
  img: string;
  imgTeaser: string;
};

type CartItem = {
  id: number;
  details: Product;
};

type CartItemsState = {
  cartItems: CartItem[];
};
