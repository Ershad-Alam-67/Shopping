import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cart-Slice"
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
export default store
