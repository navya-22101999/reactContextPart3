import CartItem from '../CartItem'
import CardContext from '../../context/CardContext'

import './index.css'

const CartListView = () => (
  <CardContext.Consumer>
    {value => {
      const {cartList} = value
      return (
        <ul className="cart-list">
          {cartList.map(eachCartItem => (
            <CartItem key={eachCartItem.id} cartItemDetails={eachCartItem} />
          ))}
        </ul>
      )
    }}
  </CardContext.Consumer>
)

export default CartListView
