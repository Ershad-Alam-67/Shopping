import classes from "./CartButton.module.css"
import { useDispatch, useSelector } from "react-redux"
import { cartActions } from "../Store/cart-Slice"
const CartButton = (props) => {
  const dispatch = useDispatch()
  const totalItems = useSelector((state) => state.cart.totalItems)
  const handleShowCart = () => {
    dispatch(cartActions.setShowCart())
  }
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  )
}

export default CartButton
