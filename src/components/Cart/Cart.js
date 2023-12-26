import Card from "../UI/Card"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"
import { cartActions } from "../Store/cart-Slice"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
let initialRender = true
const Cart = (props) => {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((cartItem) => (
          <CartItem
            item={{
              title: cartItem.title,
              quantity: cartItem.quantity,
              total: cartItem.price * cartItem.quantity,
              price: cartItem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart
