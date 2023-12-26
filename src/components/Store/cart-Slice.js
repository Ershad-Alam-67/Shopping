import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartItems: [],
    showCart: false,
    totalItems: 0,
    notify: false,
    notification_status: "sending",
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
    setNotify: (state, action) => {
      state.notify = !state.notify
      console.log(state.notify, "N")
    },
    setNotificationStatus: (state, action) => {
      state.notification_status = action.payload
    },
  },
})
export const sendCartData = (cartItems) => {
  return (dispatch) => {
    const fetchData = async () => {
      try {
        dispatch(cartActions.setNotify())
        const response = await fetch(
          "https://shopping-cf769-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cartItems),
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        if (!response.ok) {
          throw new Error("error there")
        }

        dispatch(cartActions.setNotify())
      } catch (error) {
        console.error("Error in useEffect:", error)
      }
    }

    fetchData()
  }
}

export const cartReducer = cartSlice.reducer
export const cartActions = cartSlice.actions
