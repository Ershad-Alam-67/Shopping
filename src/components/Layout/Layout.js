import { Fragment } from "react"
import MainHeader from "./MainHeader"
import Notification from "./Notification"
import { useSelector } from "react-redux"
const Layout = (props) => {
  const notify = useSelector((state) => state.cart.notify)
  return (
    <Fragment>
      {notify && <Notification></Notification>}
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  )
}

export default Layout
