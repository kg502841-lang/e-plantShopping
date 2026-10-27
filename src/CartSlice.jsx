import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    // Add a plant to the cart, or bump its quantity if it is already there
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },
    // Remove a plant from the cart; the payload is the plant's name
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    // Set a plant's quantity; the payload is { name, quantity }
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
