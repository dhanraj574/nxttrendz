import Popup from 'reactjs-popup'

import Payment from '../Payment'
import CartContext from '../../context/CartContext'
import './index.css'
const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartnum = cartList.length
      let total = 0
      cartList.map(each => {
        total = total + each.quantity * each.price
      })

      return (
        <div className="cartsummary-section">
          <h1 className="cartsummary-ordertotal">
            Order Total: <span className="total-price">Rs{total}/-</span>
          </h1>
          <p className="cartSummary-itemnum">{cartnum} items in cart</p>
          <Popup
            modal
            trigger={
              <button className='cartSummary-btn ' type='button'>
                Checkout
              </button>
            }
            position='top left'
          >
            {close => <Payment close={close} />}
          </Popup>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
