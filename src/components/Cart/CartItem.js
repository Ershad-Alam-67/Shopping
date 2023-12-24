import { useDispatch, useSelector } from "react-redux"
import classes from "./CartItem.module.css"
import { cartActions } from "../Store/cart-Slice"

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  const increaseQuantity = () => {
    const updatedCart = cartItems.map((item) => {
      if (title === item.title) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
    dispatch(cartActions.setCartItems(updatedCart))
  }
  const decreaseQuantity = () => {
    console.log(cartItems, "before remove")

    const updatedCart = cartItems.map((item) => {
      if (title === item.title) {
        if (item.quantity === 1) {
          return null
        }
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item
      }
    })

    dispatch(
      cartActions.setCartItems(updatedCart.filter((item) => item !== null))
    )
    console.log(cartItems, "after remove")
  }
  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{" "}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseQuantity}>-</button>
          <button onClick={increaseQuantity}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
