/// <reference types="vite/client" />

type Dispatcher<T> = Dispatch<SetStateAction<T>>;

interface DisplayProduct extends Product {
  sizes: ShoeSize;
}

interface SelectedProduct extends Product {
  size: number;
}

interface Product {
  id: number;
  name: string;
  teaser: string;
  price: number;
  currency: string;
  img: string;
  imgTeaser: string;
}

type ShoeSize = { number: number; inStock: boolean }[];

type CartItem = {
  id: number;
  details: SelectedProduct;
};

type CartItemsState = {
  cartItems: CartItem[];
};

type ColorModeContextType = {
  colorMode: string;
  toggleColorMode: () => void;
};
