import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    showCart: false,
    totalItems: 0,
  },
  reducers: {
    setShowCart: (state) => {
      state.showCart = !state.showCart
    },
    setCartItems: (state, action) => {
      state.cartItems = action.payload

      state.totalItems = state.cartItems.reduce((totalItems, item) => {
        return totalItems + item.quantity
      }, 0)
    },
  },
})
export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
