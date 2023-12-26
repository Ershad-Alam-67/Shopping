import React from "react"
import { useSelector } from "react-redux"
const Notification = () => {
  const notification_status = useSelector(
    (state) => state.cart.notification_status
  )
  return (
    <div className=" bg-blue-400 h-9 text-gray-100 justify-between px-[12%] flex items-center ">
      <h1 className=" font-bold">
        {notification_status === "sending"
          ? "Sending"
          : notification_status === "error"
          ? "Error"
          : "Success"}
      </h1>
      <h1>{"sending req"}</h1>
    </div>
  )
}

export default Notification
