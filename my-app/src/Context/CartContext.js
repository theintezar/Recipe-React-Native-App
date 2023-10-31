import React, { createContext, useReducer } from "react";

// Create a context
export const CartContext = createContext();

// Initial state for the cart
const initialCartState = {
  items: [],
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Check if the item is already in the cart     
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item is in the cart, update its quantity
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        // If the item is not in the cart, add it
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
        };
      }

    case "REMOVE_FROM_CART":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "INCREMENT_ITEM":
      // Increment the quantity of an item in the cart
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREMENT_ITEM":
      // Decrement the quantity of an item in the cart and remove it when quantity is zero
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0), // Remove items with quantity zero
      };
    default:
      return state;
  }
};

// CartContext provider component
export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
