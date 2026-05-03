import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem.jsx";

const CartPage = () => {
  const items = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  return (
    <section className="page">
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty. Add some plants to get started.</p>
      ) : (
        <div className="cart-list">
          {items.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <div className="cart-footer">
        <div className="total">Total: ${totalAmount.toFixed(2)}</div>
        <div className="cart-buttons">
          <Link to="/products" className="secondary-btn">
            Continue Shopping
          </Link>
          <button
            className="primary-btn"
            onClick={() => alert("Checkout coming soon!")}
          >
            Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
