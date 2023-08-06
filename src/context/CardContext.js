import React from 'react'

const CardContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
})
export default CardContext
