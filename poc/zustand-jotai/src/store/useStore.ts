import { useState, useEffect } from 'react';

export type Product = {
  id: number;
  name: string;
  price: number;
};

export type CartItem = Product & {
  quantity: number;
};

type State = {
  cart: CartItem[];
  totalItems: number;
  totalPrice: number;
};

type Actions = {
  addItem: (product: Product) => void;
  removeItem: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  calculateTotals: () => void;
};

export const useStore = (() => {
  let state: State = {
    cart: [] as CartItem[],
    totalItems: 0,
    totalPrice: 0,
  };

  const listeners = new Set<() => void>();

  const notify = () => listeners.forEach((listener) => listener());

  const actions: Actions = {
    addItem: (product: Product) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        state.cart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        state.cart = [...state.cart, { ...product, quantity: 1 }];
      }
      actions.calculateTotals();
      notify();
    },
    removeItem: (id: number) => {
      state.cart = state.cart.filter((item) => item.id !== id);
      actions.calculateTotals();
      notify();
    },
    updateQuantity: (id: number, quantity: number) => {
      if (quantity <= 0) {
        actions.removeItem(id);
        return;
      }
      state.cart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      );
      actions.calculateTotals();
      notify();
    },
    calculateTotals: () => {
      state.totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );
    },
    clearCart: () => {
      state.cart = [];
      state.totalItems = 0;
      state.totalPrice = 0;
      notify();
    },
  };

  return function useStoreHook(): typeof state & typeof actions {
    const [, forceUpdate] = useState({});

    useEffect(() => {
      const listener = () => forceUpdate({});
      listeners.add(listener);
      return () => {
        listeners.delete(listener); // cleanup
      };
    }, []);

    return { ...state, ...actions };
  };
})();

export const products: Product[] = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Mouse', price: 29 },
  { id: 3, name: 'Keyboard', price: 79 },
  { id: 4, name: 'Monitor', price: 299 },
];
