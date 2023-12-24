import { configureStore } from "@reduxjs/toolkit"
import { cartReducer } from "./cart-Slice"
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
})
console.log("store", store.getState())
export default store
