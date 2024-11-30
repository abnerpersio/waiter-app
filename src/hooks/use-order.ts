import { useCallback, useState } from 'react';
import { CartItem } from '../types/cart';
import { Product } from '../types/product';

export function useOrder() {
  const [selectedTable, setSelectedTable] = useState<string | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const handleSelectTable = useCallback((table: string) => {
    setSelectedTable(table);
  }, []);

  const handleAddToCart = useCallback((product: Product) => {
    setCartItems((prevState) => {
      const index = prevState.findIndex((cartItem) => cartItem.product._id === product._id);

      if (index >= 0) {
        const list = [...prevState];
        const cartItem = list[index];
        list[index] = { ...cartItem, quantity: (cartItem.quantity || 0) + 1 };
        return list;
      }

      return prevState.concat({ product, quantity: 1 });
    });
  }, []);

  const handleIncrementProduct = useCallback((productId: string) => {
    setCartItems((prevState) => {
      const index = prevState.findIndex((cartItem) => cartItem.product._id === productId);
      const list = [...prevState];
      const cartItem = list[index];

      list[index] = { ...cartItem, quantity: cartItem.quantity + 1 };
      return list;
    });
  }, []);

  const handleDecrementProduct = useCallback((productId: string) => {
    setCartItems((prevState) => {
      const index = prevState.findIndex((cartItem) => cartItem.product._id === productId);
      const list = [...prevState];
      const cartItem = list[index];

      if (cartItem.quantity === 1) {
        list.splice(index, 1);
        return list;
      }

      list[index] = { ...cartItem, quantity: cartItem.quantity - 1 };
      return list.filter(({ quantity }) => quantity > 0);
    });
  }, []);

  const handleResetOrder = useCallback(() => {
    setSelectedTable(null);
    setCartItems([]);
  }, []);

  return {
    selectedTable,
    cartItems,
    onAddToCart: handleAddToCart,
    onIncrementProduct: handleIncrementProduct,
    onDecrementProduct: handleDecrementProduct,
    onResetOrder: handleResetOrder,
    onSelectTable: handleSelectTable,
  };
}
