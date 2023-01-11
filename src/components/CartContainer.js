import { useDispatch, useSelector } from "react-redux";
// import { clearCart } from '../features/cart/cartSlice'
import { openModal } from "../features/modal/modalSlice";

import CartItem from "./CartItem";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Sepetim</h2>
          <h4 className="empty-cart">Boş sepet</h4>
        </header>
      </section>
    );
  }
  return (
    <section className="cart">
      <header>
        <h2>Sepetim</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            Total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Temizle
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
