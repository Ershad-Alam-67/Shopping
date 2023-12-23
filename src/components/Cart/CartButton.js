import classes from "./CartButton.module.css"
import { useDispatch } from "react-redux"
import { cartActions } from "../Store/cart-Slice"
const CartButton = (props) => {
  const dispatch = useDispatch()
  const handleShowCart = () => {
    dispatch(cartActions.setShowCart())
  }
  return (
    <button onClick={handleShowCart} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  )
}

export default CartButton
