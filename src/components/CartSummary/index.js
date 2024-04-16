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
          <button type="button" className="cartSummary-btn">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
