import Cart from "./components/Cart/Cart"
import { useEffect } from "react"
import Layout from "./components/Layout/Layout"
import Products from "./components/Shop/Products"
import { useDispatch, useSelector } from "react-redux"
import { sendCartData } from "./components/Store/cart-Slice"
import { cartActions } from "./components/Store/cart-Slice"
let initialRender = true
let count = 0

function App() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const cart = useSelector((state) => state.cart)

  const dispatch = useDispatch()
  console.log("app called for", ++count)
  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     dispatch(cartActions.setNotify())
    //     const response = await fetch(
    //       "https://shopping-cf769-default-rtdb.firebaseio.com/cartItems.json",
    //       {
    //         method: "PUT",
    //         body: JSON.stringify(cartItems),
    //         headers: {
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     )
    //     if (!response.ok) {
    //       throw new Error("error there")
    //     }
    //     await response.json()

    //     dispatch(cartActions.setNotify())
    //   } catch (error) {
    //     console.error("Error in useEffect:", error)
    //   }
    // }
    // if (initialRender) {
    //   initialRender = false
    //   return
    // }
    // fetchData()
    if (initialRender) {
      initialRender = false
      return
    }
    console.log("1st ue")
    dispatch(sendCartData(cartItems))
    console.log("ue cllae", initialRender)
  }, [cartItems])
  useEffect(() => {
    const getCartItems = async () => {
      try {
        const response = await fetch(
          "https://shopping-cf769-default-rtdb.firebaseio.com/cartItems.json"
        )
        if (!response.ok) throw new Error("erroe")
        const data = await response.json()
        dispatch(cartActions.setCartItems(data))
      } catch (error) {
        console.log(error)
      }
    }
    console.log("2nd ue")
    getCartItems()
  }, [])
  console.log("app cl", initialRender)
  return (
    <Layout>
      {cart.showCart && <Cart />}
      <Products />
    </Layout>
  )
}

export default App
