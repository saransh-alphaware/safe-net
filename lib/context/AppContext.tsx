'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  selectedFabric?: string;
}

interface AppContextType {
  cart: CartItem[];
  wishlist: Product[];
  cartOpen: boolean;
  wishlistOpen: boolean;
  searchOpen: boolean;
  quickViewProduct: Product | null;
  setCartOpen: (open: boolean) => void;
  setWishlistOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  setQuickViewProduct: (product: Product | null) => void;
  addToCart: (product: Product, quantity?: number, color?: string, fabric?: string) => void;
  removeFromCart: (productId: string, color?: string) => void;
  updateCartQuantity: (productId: string, quantity: number, color?: string) => void;
  clearCart: () => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  // Load cart and wishlist from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('safenet_cart');
    const savedWishlist = localStorage.getItem('safenet_wishlist');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error('Error loading cart:', e);
      }
    }
    if (savedWishlist) {
      try {
        setWishlist(JSON.parse(savedWishlist));
      } catch (e) {
        console.error('Error loading wishlist:', e);
      }
    }
  }, []);

  // Sync to localStorage
  const saveCart = (newCart: CartItem[]) => {
    setCart(newCart);
    localStorage.setItem('safenet_cart', JSON.stringify(newCart));
  };

  const saveWishlist = (newWishlist: Product[]) => {
    setWishlist(newWishlist);
    localStorage.setItem('safenet_wishlist', JSON.stringify(newWishlist));
  };

  const addToCart = (product: Product, quantity = 1, color?: string, fabric?: string) => {
    const activeColor = color || (product.colors && product.colors[0]) || '';
    const activeFabric = fabric || (product.fabrics && product.fabrics[0]) || '';

    const existingIndex = cart.findIndex(
      item => item.product.id === product.id && item.selectedColor === activeColor
    );

    let newCart = [...cart];
    if (existingIndex > -1) {
      newCart[existingIndex].quantity += quantity;
    } else {
      newCart.push({
        product,
        quantity,
        selectedColor: activeColor,
        selectedFabric: activeFabric
      });
    }

    saveCart(newCart);
    // Auto trigger slide-out cart drawer for luxury checkout feel!
    setCartOpen(true);
  };

  const removeFromCart = (productId: string, color?: string) => {
    const newCart = cart.filter(
      item => !(item.product.id === productId && (!color || item.selectedColor === color))
    );
    saveCart(newCart);
  };

  const updateCartQuantity = (productId: string, quantity: number, color?: string) => {
    if (quantity <= 0) {
      removeFromCart(productId, color);
      return;
    }
    const newCart = cart.map(item => {
      if (item.product.id === productId && (!color || item.selectedColor === color)) {
        return { ...item, quantity };
      }
      return item;
    });
    saveCart(newCart);
  };

  const clearCart = () => {
    saveCart([]);
  };

  const toggleWishlist = (product: Product) => {
    const exists = wishlist.some(item => item.id === product.id);
    let newWishlist = [];
    if (exists) {
      newWishlist = wishlist.filter(item => item.id !== product.id);
    } else {
      newWishlist = [...wishlist, product];
    }
    saveWishlist(newWishlist);
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some(item => item.id === productId);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        cartOpen,
        wishlistOpen,
        searchOpen,
        quickViewProduct,
        setCartOpen,
        setWishlistOpen,
        setSearchOpen,
        setQuickViewProduct,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        toggleWishlist,
        isInWishlist
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppContextProvider');
  }
  return context;
};
