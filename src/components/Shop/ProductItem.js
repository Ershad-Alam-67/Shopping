import Card from "../UI/Card"
import classes from "./ProductItem.module.css"
import { useSelector, useDispatch } from "react-redux"
import { cartActions } from "../Store/cart-Slice"
const ProductItem = (props) => {
  const { title, price, description } = props
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)
  console.log(cartItems, "before add")
  const addToCart = () => {
    const findItem = cartItems.find((item) => item.title === title)
    if (findItem) {
      const updatedCart = cartItems.map((item) => {
        if (item.title === title) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
      console.log(updatedCart)
      dispatch(cartActions.setCartItems(updatedCart))
    } else {
      dispatch(
        cartActions.setCartItems([
          ...cartItems,
          { title, price, description, quantity: 1 },
        ])
      )
      console.log(cartItems, "after add")
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button
            onClick={() => {
              addToCart()
            }}
          >
            Add to Cart
          </button>
        </div>
      </Card>
    </li>
  )
}

export default ProductItem
