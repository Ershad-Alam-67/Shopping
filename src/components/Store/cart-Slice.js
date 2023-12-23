import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    showCart: false,
  },
  reducers: {
    setShowCart: (state) => {
      state.showCart = !state.showCart
    },
  },
})
export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
