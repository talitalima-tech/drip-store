// hooks/useCart.js - Hook personalizado para usar o carrinho
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart deve ser usado dentro de um CartProvider');
  }
  return context;
};