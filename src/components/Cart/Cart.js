import Card from "../UI/Card"
import classes from "./Cart.module.css"
import CartItem from "./CartItem"
import { cartActions } from "../Store/cart-Slice"
import { useDispatch, useSelector } from "react-redux"

const Cart = (props) => {
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
